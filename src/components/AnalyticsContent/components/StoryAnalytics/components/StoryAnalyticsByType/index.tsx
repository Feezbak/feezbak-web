import { StoryTypeEnum } from "@/enums";
import ImageResponses from "./components/ImageResponses";
import CommentResponses from "./components/CommentResponses";
import { opacityAnimation } from "@assets/framerAnimations";
import { CommentResponsesType, ImageResponsesType } from "@/constants";
import { OverallCountText, StoryFeedbackWrapper, TitleText } from "./styles";

//todo need to define type interface for feedbacks Prop

interface Props {
  title: string;
  storyType: StoryTypeEnum;
  overallVotes: number;
  feedbacks: ImageResponsesType[] | CommentResponsesType[];
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
        <CommentResponses
          feedbacks={feedbacks as CommentResponsesType[]}
          storyType={storyType}
        />
      )}
    </StoryFeedbackWrapper>
  );
};

export default StoryAnalyticsByType;
