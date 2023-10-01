import { useMemo, useState } from "react";
import { StoryTypeEnum } from "@/enums";
import ImageResponses from "./components/ImageResponses";
import TextResponses from "./components/TextResponses";
import { opacityAnimation } from "@assets/framerAnimations";
import { TextResponsesType, ImageResponsesType } from "@/constants";
import { OverallCountText, StoryFeedbackWrapper, TitleText } from "./styles";

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
  const [commentsModalData, setCommentsModalData] = useState<null | {
    storyId: string;
    imageId?: string;
    respBtnId?: string;
  }>(null);

  const imageViewSelector = useMemo(
    () =>
      storyType === StoryTypeEnum.COMBINED ||
      storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP,
    [storyType]
  );

  console.log(commentsModalData, 4444);

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
          setCommentsModalData={setCommentsModalData}
        />
      ) : (
        <TextResponses
          feedbacks={feedbacks as TextResponsesType}
          storyType={storyType}
          setCommentsModalData={setCommentsModalData}
        />
      )}
    </StoryFeedbackWrapper>
  );
};

export default StoryAnalyticsByType;
