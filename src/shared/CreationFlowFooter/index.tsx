import React, { useMemo } from "react";
import { StoryStepEnum } from "@/enums";
import { ArrowRightIcon } from "@/icons";
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
        >
          {isLastStep ? "Finalize" : "Next Step"} <ArrowRightIcon />
        </StepControlNextBtn>
      );
    } else {
      return (
        <NextBtnTooltip title={toolTipTitle}>
          <StepControlNextBtn disabled>
            {isLastStep ? "Finalize" : "Next Step"} <ArrowRightIcon />
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
      <StepsControlWrapper>
        {currentStep !== StoryStepEnum.TITLE_STEP && (
          <StepControlPrevBtn onClick={prevBtnActionHandler}>
            <ArrowRightIcon /> Previous Step
          </StepControlPrevBtn>
        )}
        {nextBtnContent}
      </StepsControlWrapper>
      <StepsText>
        This is step {currentStep} out of 3 steps and then you’ll be able to
        share it with friends! 😎
      </StepsText>
    </CreationFlowFooterWrapper>
  );
};

export default CreationFlowFooter;
