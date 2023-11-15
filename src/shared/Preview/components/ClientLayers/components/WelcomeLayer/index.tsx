import { opacityAnimation } from "@assets/framerAnimations";
import {
  LayerWrapper,
  LayerInfoContent,
  ActionsWrapper,
  SkipBtn,
  NextBtn,
} from "../../styles";

interface Props {
  handleLayer: () => void;
  handleSkip: () => void;
}

const WelcomeLayer = ({ handleLayer, handleSkip }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <h2>Welcome to Feezbak 👋🏻</h2>
        <p>
          We're thrilled to have you here and we greatly value your feedback.
        </p>
      </LayerInfoContent>
      <ActionsWrapper>
        <NextBtn onClick={handleLayer} size="large">
          Learn About Feezbak
        </NextBtn>
        <SkipBtn onClick={handleSkip} size="large">
          Give Feedback
        </SkipBtn>
      </ActionsWrapper>
    </LayerWrapper>
  );
};

export default WelcomeLayer;
