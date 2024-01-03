import { opacityAnimation } from "@assets/framerAnimations";
import CreatedBy from "@shared/CreatedBy";
import {
  LayerWrapper,
  LayerInfoContent,
  ActionsWrapper,
  SkipBtn,
  LearnBtn,
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
        <LearnBtn onClick={handleLayer} size="large" ghost={true}>
          Learn About Feezbak
        </LearnBtn>
        <SkipBtn onClick={handleSkip} size="large">
          Give Feedback
        </SkipBtn>
      </ActionsWrapper>
      <CreatedBy margins="1rem 0 0 0" />
    </LayerWrapper>
  );
};

export default WelcomeLayer;
