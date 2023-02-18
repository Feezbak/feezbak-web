import React, { useContext } from "react";
import { StoryCreationContext } from "@/context";
import { CreationFlowHeader, CreationFlowFooter } from "@/shared";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";

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
    <CreationFlowWrapper xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
      <CreationFlowHeader
        actions={{ quantitySelection: true, typeSelection: true }}
      />
      <CreationFlowFooter
        nextBtnActionHandler={handleSubmitStep}
        isNextActive={false}
        currentStep={storyCreationData.currentStep}
        toolTipTitle="Please select type for your feedback"
      />
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
