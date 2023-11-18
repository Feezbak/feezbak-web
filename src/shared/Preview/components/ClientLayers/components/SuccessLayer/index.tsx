import { opacityAnimation } from "@assets/framerAnimations";
import CreatedBy from "../CreatedBy";
import {
  LayerInfoContent,
  ActionsWrapper,
  LayerWrapper,
  NextBtn,
} from "../../styles";

const SuccessLayer = () => {
  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <h2>Congrats 🤩</h2>
        <p>
          We appreciate your time and input, and are excited to offer you the
          opportunity to experience our tool.
        </p>
      </LayerInfoContent>
      <ActionsWrapper>
        <NextBtn size="large" href="https://www.feezbak.com">
          Go to Feezbak.com
        </NextBtn>
      </ActionsWrapper>
      <CreatedBy />
    </LayerWrapper>
  );
};

export default SuccessLayer;
