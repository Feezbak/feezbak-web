import { useMemo } from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { StoryTypeEnum } from "@/enums";
import CreatedBy from "@shared/CreatedBy";
import {
  ActionsWrapper,
  LayerInfoContent,
  LayerWrapper,
  NextBtn,
} from "../../styles";

interface Props {
  handleLayer: () => void;
  type: StoryTypeEnum;
}

const TypeInfoLayer = ({ handleLayer, type }: Props) => {
  const typeTextContent = useMemo(() => {
    if (type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP) {
      return (
        <>
          <h2>Text Response</h2>
          <p>
            To engage with this type of story, you'll need to tap or click on
            the circular "note" button. Once you do, you'll be able to provide
            your feedback through a text message.
          </p>
        </>
      );
    } else if (type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP) {
      return (
        <>
          <h2>Selection Response</h2>
          <p>
            To provide feedback for this type of story, you'll need to click on
            one of the answers available.
          </p>
        </>
      );
    } else if (type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP) {
      return (
        <>
          <h2>Give Your Opinion</h2>
          <p>
            You will be able to add comments on images uploaded by other users,
            offering a way to share your thoughts and provide feedback on the
            visual content presented.
          </p>
        </>
      );
    } else if (type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP) {
      return (
        <>
          <h2>Image Feedback</h2>
          <p>
            You will be able to select answers from a list of predefined options
            in response to images uploaded by other users, facilitating
            structured feedback and specific insights on the visual content.
          </p>
        </>
      );
    } else {
      return (
        <>
          <h2>Give Feedback & Add Opinion</h2>
          <p>
            You will be able to select from a predefined answers and also add
            custom comments when reacting to images posted by the user.
          </p>
        </>
      );
    }
  }, [type]);

  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>{typeTextContent}</LayerInfoContent>
      <ActionsWrapper>
        <NextBtn onClick={handleLayer} size="large" type="default">
          See what's next
        </NextBtn>
      </ActionsWrapper>
      <CreatedBy margins="1rem 0 0 0" />
    </LayerWrapper>
  );
};

export default TypeInfoLayer;
