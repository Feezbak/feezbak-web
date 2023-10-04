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
  handleSeeMoreComments: (imageId: string, imageSrc: string) => void;
}

const ImageResponse = ({ data, storyType, handleSeeMoreComments }: Props) => {
  const dataInfoComponent = useMemo(() => {
    if (storyType === StoryTypeEnum.COMBINED) {
      return (
        data?.buttons && (
          <ResponseWithBTNAndComment
            data={data.buttons}
            handleSeeMoreComments={(imageId) =>
              handleSeeMoreComments(
                imageId,
                `${process.env.REACT_APP_API_URL}/${data.src}`
              )
            }
          />
        )
      );
    } else if (storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP) {
      return data?.buttons && <ResponseWithOnlyBTN data={data.buttons} />;
    } else {
      return (
        data?.comments && (
          <ResponseWithOnlyComment
            imageId={data.id}
            data={data.comments}
            totalCommentCount={data.totalCommentCount}
            handleSeeMoreComments={(imageId) =>
              handleSeeMoreComments(
                imageId,
                `${process.env.REACT_APP_API_URL}/${data.src}`
              )
            }
          />
        )
      );
    }
  }, [storyType, data, handleSeeMoreComments]);

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
