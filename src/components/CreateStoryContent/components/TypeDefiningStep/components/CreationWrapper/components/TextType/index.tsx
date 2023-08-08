import girlSendingMessageSrc from "@images/girl-sending-message.png";
import { opacityAnimation } from "@assets/framerAnimations";
import { TextTypeWrapper, TextTypeImage } from "./styles";

const TextType = () => {
  return (
    <TextTypeWrapper {...opacityAnimation}>
      <TextTypeImage
        src={girlSendingMessageSrc}
        alt="Text type feedback"
        loading="lazy"
      />
      <h3>Be open, Accept Feedbacks!</h3>
      <p>
        You can move to the next step now as your friend will be getting a place
        to express about your concerns.
      </p>
    </TextTypeWrapper>
  );
};

export default TextType;
