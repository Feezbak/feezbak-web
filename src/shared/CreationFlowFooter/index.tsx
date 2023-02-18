import React, { useMemo } from "react";
import { StoryStepEnum } from "@/enums";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            bounce: 400,
            duration: 4,
          }}
        >
          <StepControlNextBtn type="primary" onClick={nextBtnActionHandler}>
            Next Step <ArrowRightIcon />
          </StepControlNextBtn>
        </motion.div>
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
