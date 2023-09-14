import { useMemo } from "react";
import { StoryTypeEnum } from "@/enums";
import { ImageResponsesType } from "@/constants";
import ResponseWithOnlyBTN from "./components/ResponseWithOnlyBTN";
import ResponseWithBTNAndComment from "./components/ResponseWithBTNAndComment";
import ResponseWithOnlyComment from "./components/ResponseWithOnlyComment";
import { ImageResponseContainer, ImageCol, Image } from "./styles";

interface Props {
  data: ImageResponsesType;
  storyType: StoryTypeEnum;
}

const ImageResponse = ({ data, storyType }: Props) => {
  const dataInfoComponent = useMemo(() => {
    if (storyType === StoryTypeEnum.COMBINED) {
      return <ResponseWithBTNAndComment />;
    } else if (storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP) {
      return data?.buttons && <ResponseWithOnlyBTN data={data.buttons} />;
    } else {
      return data?.comments && <ResponseWithOnlyComment data={data.comments} />;
    }
  }, [storyType, data]);

  return (
    <ImageResponseContainer>
      <ImageCol xs={24} sm={24} md={6} lg={5} xl={5} xxl={5}>
        <Image
          src={`${process.env.REACT_APP_API_URL}/${data.src}`}
          loading="lazy"
        />
      </ImageCol>
      {dataInfoComponent}
    </ImageResponseContainer>
  );
};

export default ImageResponse;
