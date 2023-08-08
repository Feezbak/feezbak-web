import { useMemo } from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { StoryTypeEnum } from "@/enums";
import {
  ActionsWrapper,
  LayerInfoContent,
  LayerWrapper,
  NextBtn,
  SkipBtn,
} from "../../styles";

interface Props {
  handleLayer: () => void;
  handleSkip: () => void;
  type: StoryTypeEnum;
}

const TypeInfoLayer = ({ handleLayer, handleSkip, type }: Props) => {
  const typeTextContent = useMemo(() => {
    if (type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP) {
      return (
        <>
          <h2>Text Response Story</h2>
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
          <h2>Button Response Story</h2>
          <p>
            To provide feedback for this type of story, you'll need to click on
            one of the buttons available.
          </p>
        </>
      );
    } else if (type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP) {
      return (
        <>
          <h2>Text Response Story</h2>
          <p>
            To provide feedback about the images attached to this type of story,
            you'll need to tap or click on the circular "note" button. This will
            allow you to send your feedback via text.
          </p>
        </>
      );
    } else if (type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP) {
      return (
        <>
          <h2>Button Response Story</h2>
          <p>
            To provide feedback about the images attached to this type of story,
            you'll need to tap or click on the action buttons. This will enable
            you to send your feedback effectively.
          </p>
        </>
      );
    } else {
      return (
        <>
          <h2>Combined Response Story</h2>
          <p>
            To engage with this type of story, you'll need to tap or click on
            the action buttons. Once you do, a text area will appear where you
            can provide additional information about your choice.
          </p>
        </>
      );
    }
  }, [type]);

  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>{typeTextContent}</LayerInfoContent>
      <ActionsWrapper>
        <NextBtn onClick={handleLayer}>Next</NextBtn>
        <SkipBtn onClick={handleSkip}>Skip {">>>"}</SkipBtn>
      </ActionsWrapper>
    </LayerWrapper>
  );
};

export default TypeInfoLayer;
