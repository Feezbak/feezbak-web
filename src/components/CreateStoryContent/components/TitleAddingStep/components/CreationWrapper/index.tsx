import React, { useContext } from "react";
import Editor from "./components/Editor";
import { StoryCreationContext } from "@/context";
import { storyDefaultState } from "@/constants";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";
import { CreationFlowHeader, CreationFlowFooter } from "@/shared";

const CreationWrapper = () => {
  const { currentStep, step1, setNextStep } = useContext(StoryCreationContext);

  const handleSubmitStep = () => {
    setNextStep();
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={13} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader />
      <Editor />
      <CreationFlowFooter
        currentStep={currentStep}
        nextBtnActionHandler={handleSubmitStep}
        isNextActive={step1.title !== storyDefaultState.step1.title}
        toolTipTitle="Please provide title text, to be able go to next step!"
      />
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
