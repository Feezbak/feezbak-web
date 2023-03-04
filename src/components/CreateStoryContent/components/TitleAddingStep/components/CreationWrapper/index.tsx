import React, { useContext } from "react";
import Editor from "./components/Editor";
import { StoryCreationContext } from "@/context";
import { storyDefaultState } from "@/constants";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";
import { CreationFlowHeader, CreationFlowFooter } from "@/shared";

const CreationWrapper = () => {
  const { storyCreationData, setStoryCreationData } =
    useContext(StoryCreationContext);

  const handleSubmitStep = () => {
    setStoryCreationData((ps) => ({
      ...ps,
      currentStep: ps.currentStep + 1,
    }));
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={13} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader />
      <Editor />
      <CreationFlowFooter
        currentStep={storyCreationData.currentStep}
        nextBtnActionHandler={handleSubmitStep}
        isNextActive={
          storyCreationData.step1.title !== storyDefaultState.step1.title
        }
        toolTipTitle="Please provide title text, to be able go to next step!"
      />
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
