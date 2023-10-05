import { StoryTypeEnum } from "@/enums";
import { useParams } from "react-router-dom";
import { ImageResponsesType } from "@/constants";
import ImageResponse from "./components/ImageResponse";
import { StorySlidesContainer } from "../../styles";

interface Props {
  feedbacks: ImageResponsesType[];
  storyType: StoryTypeEnum;
  setCommentsModalData: (commentsModalData: {
    storyId: string;
    imageId: string;
    imageSrc: string;
    respBtnId?: string;
  }) => void;
}

const ImageResponses = ({
  feedbacks,
  storyType,
  setCommentsModalData,
}: Props) => {
  const { storyId } = useParams();
  const handleSeeMoreComments = (
    imageId: string,
    imageSrc: string,
    respBtnId?: string
  ) => {
    setCommentsModalData({
      imageId,
      storyId: storyId!,
      imageSrc,
      respBtnId: respBtnId ?? "",
    });
  };

  return (
    <StorySlidesContainer>
      {feedbacks.map((feedback) => (
        <ImageResponse
          handleSeeMoreComments={handleSeeMoreComments}
          key={feedback.id}
          data={feedback}
          storyType={storyType}
        />
      ))}
    </StorySlidesContainer>
  );
};

export default ImageResponses;
