import { opacityAnimation } from "@assets/framerAnimations";
import { LayerWrapper, LayerInfoContent } from "../../styles";

const SuccessLayer = () => {
  return (
    <LayerWrapper {...opacityAnimation}>
      <LayerInfoContent>
        <h2>
          Congrats 🤩
          <br />
          <br />
          You did it 🎉🎉🎉
        </h2>
        <p>
          We extend our heartfelt gratitude for the feedback you've provided.
          Your insights and observations are of immense value to us. It's a
          rarity to receive such thoughtful and constructive input, and we want
          you to know how genuinely appreciative we are. Your willingness to
          share your thoughts has not only contributed to our improvement but
          has also inspired us to reach for greater heights. Your feedback is an
          integral part of our journey towards excellence, and we can't thank
          you enough for investing your time to provide it.
        </p>
      </LayerInfoContent>
    </LayerWrapper>
  );
};

export default SuccessLayer;
