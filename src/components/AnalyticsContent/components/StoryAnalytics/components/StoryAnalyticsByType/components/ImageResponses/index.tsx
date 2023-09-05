import { StoryTypeEnum } from "@/enums";
import { ImageResponsesType } from "@/constants";

interface Props {
  feedbacks: ImageResponsesType[];
  storyType: StoryTypeEnum;
}

const ImageResponses = ({ feedbacks, storyType }: Props) => {
  return <div>Image Response, create dynamic page rely on type</div>;
};

export default ImageResponses;
