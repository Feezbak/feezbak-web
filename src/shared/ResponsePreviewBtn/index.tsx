import { opacityAnimation } from "@assets/framerAnimations";
import { ResponsePreviewButton, AnimationWrapper } from "./styles";

interface Props {
  text: string;
  margin?: string;
  action?: () => void;
  isActive?: boolean;
  disabled?: boolean;
}

const ResponsePreviewBtn = ({
  text,
  action,
  margin = "",
  isActive = false,
  disabled = false,
}: Props) => {
  return (
    <AnimationWrapper {...opacityAnimation} transition={{ duration: 0.2 }}>
      <ResponsePreviewButton
        disabled={disabled}
        onClick={isActive ? undefined : action}
        $isActive={isActive}
        $margin={margin}
      >
        {text}
      </ResponsePreviewButton>
    </AnimationWrapper>
  );
};

export default ResponsePreviewBtn;
