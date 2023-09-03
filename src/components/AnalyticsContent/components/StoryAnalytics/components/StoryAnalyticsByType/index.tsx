import { StoryTypeEnum } from "@/enums";
import ImageResponses from "./components/ImageResponses";
import CommentResponses from "./components/CommentResponses";
import { OverallCountText, StoryFeedbackWrapper, TitleText } from "./styles";

//todo need to define type interface for feedbacks Prop

interface Props {
  title: string;
  storyType: StoryTypeEnum;
  overallVotes: number;
  feedbacks: unknown;
}

const views = {
  imageResponses: ImageResponses,
  commentResponses: CommentResponses,
};

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

  const CurrentView =
    views[imageViewSelector ? "imageResponses" : "commentResponses"];

  console.log(feedbacks, 33333);

  return (
    <StoryFeedbackWrapper>
      <TitleText>{title}</TitleText>
      <OverallCountText>
        Total number of votes: <strong>{overallVotes}</strong>
      </OverallCountText>
      <CurrentView feedbacks={feedbacks} />
    </StoryFeedbackWrapper>
  );
};

export default StoryAnalyticsByType;
