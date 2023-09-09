import { opacityAnimation } from "@assets/framerAnimations";
import { ResponsePreviewButton, AnimationWrapper } from "./styles";

interface Props {
  text: string;
  action?: () => void;
  isActive?: boolean;
}

const ResponsePreviewBtn = ({ text, action, isActive = false }: Props) => {
  return (
    <AnimationWrapper {...opacityAnimation} transition={{ duration: 0.2 }}>
      <ResponsePreviewButton
        $isActive={isActive}
        onClick={isActive ? undefined : action}
      >
        {text}
      </ResponsePreviewButton>
    </AnimationWrapper>
  );
};

export default ResponsePreviewBtn;
