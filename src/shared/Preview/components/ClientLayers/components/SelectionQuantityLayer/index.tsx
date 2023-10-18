import { opacityAnimation } from "@assets/framerAnimations";
import {
  LayerWrapper,
  LayerInfoContent,
  NextBtn,
  ActionsWrapper,
  SkipBtn,
} from "../../styles";

interface Props {
  handleLayer: () => void;
  handleSkip: () => void;
}

const SelectionQuantityLayer = ({ handleLayer, handleSkip }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <h2>Interaction Type 🗝</h2>
        <p>
          This story is in <b>Single Selection</b> mode, so please be careful
          with your interactions because once you provide a response, the story
          will be complete!
          <br />
          <br />
          Please note that once you submit your responses, the survey will be
          finalized, and you will not be able to make any changes. Therefore, we
          encourage you to carefully consider your answers before submitting.
          <br />
          <br />
          Rest assured that your responses will remain strictly confidential and
          will only be used for the purpose of research and analysis. Your
          personal information will be kept secure and will not be shared with
          any third parties.
        </p>
      </LayerInfoContent>
      <ActionsWrapper>
        <NextBtn onClick={handleLayer} size="large">
          Next
        </NextBtn>
        <SkipBtn onClick={handleSkip} size="large">
          Skip {">>>"}
        </SkipBtn>
      </ActionsWrapper>
    </LayerWrapper>
  );
};

export default SelectionQuantityLayer;
