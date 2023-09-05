import { StoryTypeEnum } from "@/enums";
import { ImageResponsesType } from "@/constants";
import { ImageResponseContainer, ImageCol, Image } from "./styles";

interface Props {
  data: ImageResponsesType;
  storyType: StoryTypeEnum;
}

const ImageResponse = ({ data, storyType }: Props) => {
  return (
    <ImageResponseContainer>
      <ImageCol xs={24} sm={24} md={5} lg={5} xl={5} xxl={5}>
        <Image
          src={`${process.env.REACT_APP_API_URL}/${data.src}`}
          loading="lazy"
        />
      </ImageCol>
    </ImageResponseContainer>
  );
};

export default ImageResponse;
