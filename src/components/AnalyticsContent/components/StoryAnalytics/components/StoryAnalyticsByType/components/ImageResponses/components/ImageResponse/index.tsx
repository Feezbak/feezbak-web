import { useMemo, useState } from "react";
import { StoryTypeEnum } from "@/enums";
import { ImageResponsesType } from "@/constants";
import ResponseWithOnlyBTN from "./components/ResponseWithOnlyBTN";
import ResponseWithBTNAndComment from "./components/ResponseWithBTNAndComment";
import ResponseWithOnlyComment from "./components/ResponseWithOnlyComment";
import { ImageResponseContainer, ImageCol, Image } from "./styles";

interface Props {
  data: ImageResponsesType;
  storyType: StoryTypeEnum;
  handleSeeMoreComments: (
    imageId: string,
    imageSrc: string,
    respBtnId?: string
  ) => void;
}

const resolveImageUrl = (src: string) =>
  src.startsWith("http") ? src : `${process.env.REACT_APP_API_URL}/${src}`;

const BROKEN_IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='54' font-family='sans-serif' font-size='12' fill='%23bbb' text-anchor='middle'%3ENo image%3C/text%3E%3C/svg%3E";

const ImageResponse = ({ data, storyType, handleSeeMoreComments }: Props) => {
  const [imgSrc, setImgSrc] = useState(() => resolveImageUrl(data.src));
  const resolvedSrc = resolveImageUrl(data.src);

  const dataInfoComponent = useMemo(() => {
    if (storyType === StoryTypeEnum.COMBINED) {
      return (
        data?.buttons && (
          <ResponseWithBTNAndComment
            data={data.buttons}
            handleSeeMoreComments={(respBtnId) =>
              handleSeeMoreComments(data.id, resolvedSrc, respBtnId)
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
            data={data.comments}
            totalCommentCount={data.totalCommentCount}
            handleSeeMoreComments={() =>
              handleSeeMoreComments(data.id, resolvedSrc)
            }
          />
        )
      );
    }
  }, [storyType, data, handleSeeMoreComments, resolvedSrc]);

  return (
    <ImageResponseContainer>
      <ImageCol xs={24} sm={24} md={6} lg={5} xl={5} xxl={5}>
        <Image
          src={imgSrc}
          loading="lazy"
          onError={() => setImgSrc(BROKEN_IMAGE_PLACEHOLDER)}
        />
      </ImageCol>
      {dataInfoComponent}
    </ImageResponseContainer>
  );
};

export default ImageResponse;
