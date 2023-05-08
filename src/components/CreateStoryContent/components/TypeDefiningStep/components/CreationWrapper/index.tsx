import React, { useContext, useMemo } from "react";
import { StoryTypeEnum } from "@/enums";
import { StoryCreationContext } from "@/context";
import ImageType from "./components/ImageType";
import TextType from "./components/TextType";
import Response from "./components/Response";
import { AnimatePresence } from "framer-motion";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";

const CreationWrapper = () => {
  const {
    currentStep,
    step2,
    setNextStep,
    setPrevStep,
    setVotingType,
    setSelectionQuantityState,
  } = useContext(StoryCreationContext);

  const handleSubmitStep = () => {
    setNextStep();
  };

  const handleGoToPrevStep = () => {
    setPrevStep();
  };

  const handleQuantitySelection = (value: boolean) => {
    setSelectionQuantityState(value);
  };

  const handleTypeSelection = (value: StoryTypeEnum) => {
    setVotingType(value);
  };

  const isImageVoting = useMemo(
    () =>
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP ||
      step2.type === StoryTypeEnum.COMBINED,
    [step2]
  );

  const isBtnResponse = useMemo(
    () =>
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.COMBINED,
    [step2]
  );

  const isNextActive = useMemo(() => {
    if (
      step2.type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP
    ) {
      return true;
    } else if (
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
      step2.type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP ||
      step2.type === StoryTypeEnum.COMBINED
    ) {
      return step2.imageVoting.isImageAttached;
    }
    return false;
  }, [step2]);

  return (
    <CreationFlowWrapper xs={24} sm={24} md={13} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader
        actions={{ quantitySelection: isImageVoting, typeSelection: true }}
        typeSelectionDefaultValue={step2.type}
        quantitySelectionDefaultValue={step2.isMultiple}
        handleQuantitySelection={handleQuantitySelection}
        handleTypeSelection={handleTypeSelection}
      />
      <AnimatePresence initial={false}>
        {isImageVoting ? <ImageType /> : <TextType />}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {isBtnResponse && <Response />}
      </AnimatePresence>
      <CreationFlowFooter
        prevBtnActionHandler={handleGoToPrevStep}
        nextBtnActionHandler={handleSubmitStep}
        isNextActive={isNextActive}
        currentStep={currentStep}
        toolTipTitle="Please select type for your feedback"
      />
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
