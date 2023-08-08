import { opacityAnimation } from "@assets/framerAnimations";
import {
  LayerWrapper,
  NextBtn,
  ActionsWrapper,
  SkipBtn,
  LayerInfoContent,
} from "../../styles";

interface Props {
  handleLayer: () => void;
  handleSkip: () => void;
}

const PIILayer = ({ handleLayer, handleSkip }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <p>
          <h2>Credentials Request! 📝</h2>
          Feedback story creator kindly request that you provide some
          credentials to establish a means of communication and ensure the
          security and authenticity of our exchange. These credentials will
          enable me to reach out to you directly and ensure that our
          correspondence remains confidential.
          <br />
          Rest assured that the information you provide will be treated with the
          utmost care and confidentiality. It will only be used for the purpose
          of establishing communication for this feedback request.
          <br />
          <br />
          By clicking on "Accept" button you will accept to provide your
          credentials to be able to connect with you.
        </p>
      </LayerInfoContent>
      <ActionsWrapper>
        <NextBtn onClick={handleLayer}>Next</NextBtn>
        <SkipBtn onClick={handleSkip}>Skip {">>>"}</SkipBtn>
      </ActionsWrapper>
    </LayerWrapper>
  );
};

export default PIILayer;
