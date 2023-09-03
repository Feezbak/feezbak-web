import { StoryTypeEnum } from "@/enums";

interface Props {
  feedbacks: unknown;
  storyType: StoryTypeEnum;
}

const ImageResponses = ({ feedbacks, storyType }: Props) => {
  return <div>Image Response, create dynamic page rely on type</div>;
};

export default ImageResponses;
