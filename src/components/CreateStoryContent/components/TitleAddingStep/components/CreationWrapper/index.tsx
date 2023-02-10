import React from "react";
import { GoBackRoundIcon, ArrowUpSquareIcon } from "@/icons";
import Editor from "./components/Editor";
import {
  CreationFlowWrapper,
  CreationFlowHeader,
  CreationFlowFooter,
  BackBtn,
  StepsText,
  StepsControlWrapper,
  StepControlNextBtn,
  StepControlPrevBtn,
} from "./styles";

const CreationWrapper = () => {
  return (
    <CreationFlowWrapper xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
      <CreationFlowHeader>
        <BackBtn icon={<GoBackRoundIcon />} type="link" href="/dashboard" />
        <h3>Creating Story</h3>
      </CreationFlowHeader>
      <Editor />
      <CreationFlowFooter>
        <StepsControlWrapper>
          <StepControlPrevBtn icon={<ArrowUpSquareIcon />} disabled={true} />
          <StepControlNextBtn icon={<ArrowUpSquareIcon />} />
        </StepsControlWrapper>
        <StepsText>
          This is step 1 out of 3 steps and then you’ll be able to share it with
          friends! 😎
        </StepsText>
      </CreationFlowFooter>
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
