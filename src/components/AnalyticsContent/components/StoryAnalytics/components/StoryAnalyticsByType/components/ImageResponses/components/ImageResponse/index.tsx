import { ImageResponseContainer } from "./styles";
import { StoryTypeEnum } from "@/enums";
import { ImageResponsesType } from "@/constants";

interface Props {
  data: ImageResponsesType;
  storyType: StoryTypeEnum;
}

const ImageResponse = ({ data, storyType }: Props) => {
  return <ImageResponseContainer>fff</ImageResponseContainer>;
};

export default ImageResponse;
