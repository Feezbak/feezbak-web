import { StoryTypeEnum } from "@/enums";
import { ImageResponsesType } from "@/constants";
import ImageResponse from "./components/ImageResponse";
import { StorySlidesContainer } from "../../styles";

interface Props {
  feedbacks: ImageResponsesType[];
  storyType: StoryTypeEnum;
}

const ImageResponses = ({ feedbacks, storyType }: Props) => {
  return (
    <StorySlidesContainer>
      {feedbacks.map((feedback) => (
        <ImageResponse
          key={feedback.id}
          data={feedback}
          storyType={storyType}
        />
      ))}
    </StorySlidesContainer>
  );
};

export default ImageResponses;
