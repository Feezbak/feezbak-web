import { StoryTypeEnum } from "@/enums";
import { useParams } from "react-router-dom";
import { ImageResponsesType } from "@/constants";
import ImageResponse from "./components/ImageResponse";
import { StorySlidesContainer } from "../../styles";

interface Props {
  feedbacks: ImageResponsesType[];
  storyType: StoryTypeEnum;
}

const ImageResponses = ({ feedbacks, storyType }: Props) => {
  const { storyId } = useParams();
  const handleSeeMoreComments = (imageId: string) => {
    console.log(storyId, imageId, 77777);
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
