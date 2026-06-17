import { opacityAnimation } from "@assets/framerAnimations";
import piiIllustartionSrc from "@images/data.webp";
import CreatedBy from "@shared/CreatedBy";
import {
  NextBtn,
  LayerWrapper,
  Illustration,
  ActionsWrapper,
  LayerInfoContent,
} from "../../styles";

interface Props {
  handleLayer: () => void;
}

const PIILayer = ({ handleLayer }: Props) => {
  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <Illustration src={piiIllustartionSrc} alt="pii image" />
        <p>
          <h2>Credentials Request! 📝</h2>
          We'll need to ask for some of your personal information soon. Thanks
          for understanding.
        </p>
      </LayerInfoContent>
      <ActionsWrapper>
        <NextBtn onClick={handleLayer} size="large">
          See what's next
        </NextBtn>
      </ActionsWrapper>
      <CreatedBy margins="1rem 0 0 0" />
    </LayerWrapper>
  );
};

export default PIILayer;
