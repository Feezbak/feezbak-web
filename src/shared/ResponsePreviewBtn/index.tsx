import React from "react";
import { opacityAnimation } from "@assets/framerAnimations";
import { ResponsePreviewButton, AnimationWrapper } from "./styles";

interface Props {
  text: string;
  action?: () => void;
}

const ResponsePreviewBtn = ({ text, action }: Props) => {
  return (
    <AnimationWrapper {...opacityAnimation} transition={{ duration: 0.2 }}>
      <ResponsePreviewButton onClick={action}>{text}</ResponsePreviewButton>
    </AnimationWrapper>
  );
};

export default ResponsePreviewBtn;
