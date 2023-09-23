import { opacityAnimation } from "@assets/framerAnimations";
import { ResponsePreviewButton, AnimationWrapper } from "./styles";

interface Props {
  text: string;
  action?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

const ResponsePreviewBtn = ({
  text,
  action,
  isActive = false,
  disabled = false,
}: Props) => {
  return (
    <AnimationWrapper {...opacityAnimation} transition={{ duration: 0.2 }}>
      <ResponsePreviewButton
        disabled={disabled}
        $isActive={isActive}
        onClick={isActive ? undefined : action}
      >
        {text}
      </ResponsePreviewButton>
    </AnimationWrapper>
  );
};

export default ResponsePreviewBtn;
