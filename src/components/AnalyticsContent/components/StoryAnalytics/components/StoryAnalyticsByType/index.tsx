import { useMemo, useState } from "react";
import { StoryTypeEnum } from "@/enums";
import ImageResponses from "./components/ImageResponses";
import TextResponses from "./components/TextResponses";
import CommentsModalContent from "./components/CommentsModalContent";
import { opacityAnimation } from "@assets/framerAnimations";
import { CustomModal } from "@/shared";
import { TextResponsesType, ImageResponsesType } from "@/constants";
import { OverallCountText, StoryFeedbackWrapper, TitleText } from "./styles";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";
import UpgradeModal from "@/components/UpgradeModal";

interface Props {
  title: string;
  storyType: StoryTypeEnum;
  overallVotes: number;
  feedbacks: ImageResponsesType[] | TextResponsesType[];
}

const StoryAnalyticsByType = ({
  title,
  storyType,
  overallVotes,
  feedbacks,
}: Props) => {
  const user = useRecoilValue(userData);
  const isPro = user?.plan === "pro";
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [commentsModalData, setCommentsModalData] = useState<null | {
    storyId: string;
    imageId?: string;
    respBtnId?: string;
    imageSrc?: string;
  }>(null);

  const handleSetCommentsModalData = (
    data: {
      storyId: string;
      imageId?: string;
      respBtnId?: string;
      imageSrc?: string;
    } | null
  ) => {
    if (!isPro) {
      setShowUpgrade(true);
      return;
    }
    setCommentsModalData(data);
  };

  const imageViewSelector = useMemo(
    () =>
      storyType === StoryTypeEnum.COMBINED ||
      storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
    [storyType]
  );

  return (
    <StoryFeedbackWrapper {...opacityAnimation}>
      <TitleText>{title}</TitleText>
      <OverallCountText>
        Total number of votes: <strong>{overallVotes}</strong>
      </OverallCountText>
      {imageViewSelector ? (
        <ImageResponses
          feedbacks={feedbacks as ImageResponsesType[]}
          storyType={storyType}
          setCommentsModalData={handleSetCommentsModalData}
        />
      ) : (
        <TextResponses
          feedbacks={feedbacks as TextResponsesType}
          storyType={storyType}
          setCommentsModalData={handleSetCommentsModalData}
        />
      )}
      <CustomModal
        isOpen={!!commentsModalData}
        closeModal={() => setCommentsModalData(null)}
      >
        <CommentsModalContent
          imageSrc={commentsModalData?.imageSrc}
          storyId={commentsModalData?.storyId}
          imageId={commentsModalData?.imageId}
          respBtnId={commentsModalData?.respBtnId}
          closeModal={() => setCommentsModalData(null)}
        />
      </CustomModal>
      <UpgradeModal
        open={showUpgrade}
        onClose={() => setShowUpgrade(false)}
        reason="View per-respondent comments and details."
      />
    </StoryFeedbackWrapper>
  );
};

export default StoryAnalyticsByType;
