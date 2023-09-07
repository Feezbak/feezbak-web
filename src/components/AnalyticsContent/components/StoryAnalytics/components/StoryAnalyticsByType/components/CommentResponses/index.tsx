import { CommentResponsesType } from "@/constants";
import { StoryTypeEnum } from "@/enums";

interface Props {
  feedbacks: CommentResponsesType[];
  storyType: StoryTypeEnum;
}

const CommentResponses = ({ feedbacks, storyType }: Props) => {
  return <div>Comment Response</div>;
};

export default CommentResponses;
