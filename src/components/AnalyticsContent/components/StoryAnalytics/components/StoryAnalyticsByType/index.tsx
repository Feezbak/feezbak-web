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
  const imageViewSelector =
    storyType === StoryTypeEnum.COMBINED ||
    storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
    storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP;

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
        />
      ) : (
        <TextResponses
          feedbacks={feedbacks as TextResponsesType}
          storyType={storyType}
        />
      )}
    </StoryFeedbackWrapper>
  );
};

export default StoryAnalyticsByType;
