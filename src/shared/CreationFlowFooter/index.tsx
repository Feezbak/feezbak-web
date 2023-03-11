import React, { useMemo } from "react";
import { StoryStepEnum } from "@/enums";
import { ArrowRightIcon } from "@/icons";
import { Tooltip } from "antd";
import {
  CreationFlowFooterWrapper,
  StepsText,
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
}

const CreationFlowFooter = ({
  currentStep,
  toolTipTitle,
  isNextActive,
  prevBtnActionHandler,
  nextBtnActionHandler,
}: Props) => {
  const nextBtnContent = useMemo(() => {
    if (isNextActive) {
      return (
        <StepControlNextBtn type="primary" onClick={nextBtnActionHandler}>
          Next Step <ArrowRightIcon />
        </StepControlNextBtn>
      );
    } else {
      return (
        <Tooltip title={toolTipTitle}>
          <StepControlNextBtn disabled>
            Next Step <ArrowRightIcon />
          </StepControlNextBtn>
        </Tooltip>
      );
    }
  }, [nextBtnActionHandler, isNextActive, toolTipTitle]);

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
