import { opacityAnimation } from "@assets/framerAnimations";
import CreatedBy from "../CreatedBy";
import singleSelectIllustartionSrc from "@images/confused.png";
import {
  LayerInfoContent,
  ActionsWrapper,
  Illustration,
  LayerWrapper,
  NextBtn,
} from "../../styles";

interface Props {
  handleLayer: () => void;
}

const SelectionQuantityLayer = ({ handleLayer }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <Illustration
          src={singleSelectIllustartionSrc}
          alt="single select mode"
        />
        <h2>Single Action</h2>
        <p>
          Please note that once you submit your responses, the survey will be
          finalized, and you will not be able to make any changes. Therefore, we
          encourage you to carefully consider your answers before submitting.
        </p>
      </LayerInfoContent>
      <ActionsWrapper>
        <NextBtn onClick={handleLayer} size="large">
          See what's next
        </NextBtn>
      </ActionsWrapper>
      <CreatedBy />
    </LayerWrapper>
  );
};

export default SelectionQuantityLayer;
