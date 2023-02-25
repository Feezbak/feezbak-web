import React, { useContext } from "react";
import { StoryTypeEnum } from "@/enums";
import { StoryCreationContext } from "@/context";
import ImageType from "./components/ImageType";
import TextType from "./components/TextType";
import { AnimatePresence } from "framer-motion";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
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

  const handleQuantitySelection = (value: boolean) => {
    setStoryCreationData((ps) => ({
      ...ps,
      step2: {
        isMultiple: value,
        type: ps.step2.type,
      },
    }));
  };

  const handleTypeSelection = (value: StoryTypeEnum) => {
    setStoryCreationData((ps) => ({
      ...ps,
      step2: {
        isMultiple: ps.step2.isMultiple,
        type: value,
      },
    }));
  };

  return (
    <CreationFlowWrapper xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
      <CreationFlowHeader
        actions={{ quantitySelection: true, typeSelection: true }}
        typeSelectionDefaultValue={storyCreationData.step2.type}
        quantitySelectionDefaultValue={storyCreationData.step2.isMultiple}
        handleQuantitySelection={handleQuantitySelection}
        handleTypeSelection={handleTypeSelection}
      />
      <AnimatePresence initial={false}>
        {storyCreationData.step2.type === StoryTypeEnum.IMAGE_VOTING && (
          <ImageType />
        )}
        {storyCreationData.step2.type === StoryTypeEnum.TEXT_VOTING && (
          <TextType />
        )}
      </AnimatePresence>
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
