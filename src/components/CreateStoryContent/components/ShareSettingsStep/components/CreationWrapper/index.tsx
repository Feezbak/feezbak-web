import React, { useContext } from "react";
import { StoryCreationContext } from "@/context";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import FeedbackShareAndGetSettings from "./components/FeedbackShareAndGetSettings";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";

const CreationWrapper = () => {
  const { currentStep, setNextStep, setPrevStep } =
    useContext(StoryCreationContext);

  const handleFinalize = () => {
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
        nextBtnActionHandler={handleFinalize}
        isNextActive={false}
        isLastStep={true}
        currentStep={currentStep}
        toolTipTitle="Great job!, let's get our Feedback"
      />
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
