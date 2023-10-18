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
          <br />
          <br />
          Thank you for taking the time to share your thoughts with us. Your
          feedback matters, and we're excited to have you on board as we work
          together to make our web app even better. Enjoy your time exploring
          and using our platform, and feel free to reach out to us if you have
          any questions or need assistance along the way.
          <br />
          <br />
          Welcome once again, and let's embark on this feedback journey
          together!
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

export default WelcomeLayer;
