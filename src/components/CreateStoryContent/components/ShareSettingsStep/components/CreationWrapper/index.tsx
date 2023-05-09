import React, { useContext } from "react";
import { StoryCreationContext } from "@/context";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import FeedbackShareAndGetSettings from "./components/FeedbackShareAndGetSettings";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";

const CreationWrapper = () => {
  const { currentStep, setNextStep, setPrevStep } =
    useContext(StoryCreationContext);

  const handleSubmitStep = () => {
    setNextStep();
  };

  const handleGoToPrevStep = () => {
    setPrevStep();
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={13} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader />
      <FeedbackShareAndGetSettings />
      <CreationFlowFooter
        prevBtnActionHandler={handleGoToPrevStep}
        nextBtnActionHandler={handleSubmitStep}
        isNextActive={false}
        currentStep={currentStep}
        toolTipTitle="Please select type for your feedback"
      />
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
