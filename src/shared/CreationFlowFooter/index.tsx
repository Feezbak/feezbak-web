import { useMemo } from "react";
import { StoryStepEnum } from "@/enums";
import {
  CreationFlowFooterWrapper,
  StepsText,
  NextBtnTooltip,
  StepsControlWrapper,
  StepControlPrevBtn,
  StepControlNextBtn,
} from "./styles";

interface Props {
  currentStep: StoryStepEnum;
  toolTipTitle: string;
  nextBtnActionHandler?: () => void;
  prevBtnActionHandler?: () => void;
  isNextActive: boolean;
  nextLoading?: boolean;
  isLastStep?: boolean;
}

const CreationFlowFooter = ({
  nextLoading,
  currentStep,
  toolTipTitle,
  isNextActive,
  prevBtnActionHandler,
  nextBtnActionHandler,
  isLastStep = false,
}: Props) => {
  const nextBtnContent = useMemo(() => {
    if (isNextActive || isLastStep) {
      return (
        <StepControlNextBtn
          type="primary"
          onClick={nextBtnActionHandler}
          loading={nextLoading}
          size="large"
        >
          {isLastStep ? "Finalize" : "Next Step"}
        </StepControlNextBtn>
      );
    } else {
      return (
        <NextBtnTooltip title={toolTipTitle}>
          <StepControlNextBtn disabled size="large">
            {isLastStep ? "Finalize" : "Next Step"}
          </StepControlNextBtn>
        </NextBtnTooltip>
      );
    }
  }, [
    nextBtnActionHandler,
    isNextActive,
    toolTipTitle,
    isLastStep,
    nextLoading,
  ]);

  return (
    <CreationFlowFooterWrapper>
      <StepsText>
        This is step {currentStep} out of 4 steps and then you’ll be able to
        share it with friends! 😎
      </StepsText>
      <StepsControlWrapper>
        {currentStep !== StoryStepEnum.TITLE_STEP && (
          <StepControlPrevBtn
            onClick={prevBtnActionHandler}
            type="default"
            size="large"
          >
            Previous Step
          </StepControlPrevBtn>
        )}
        {nextBtnContent}
      </StepsControlWrapper>
    </CreationFlowFooterWrapper>
  );
};

export default CreationFlowFooter;
