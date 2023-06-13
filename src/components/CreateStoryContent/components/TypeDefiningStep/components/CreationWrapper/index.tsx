import React, { useContext, useMemo, useCallback } from "react";
import { StoryTypeEnum } from "@/enums";
import { StoryCreationContext } from "@/context";
import ImageType from "./components/ImageType";
import TextType from "./components/TextType";
import Response from "./components/Response";
import { AnimatePresence } from "framer-motion";
import { notification } from "antd";
import { AnanasOnBikeIcon } from "@/icons";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";

interface Props {
  handleDemo: () => void;
}

const CreationWrapper = ({ handleDemo }: Props) => {
  const [api, contextHolder] = notification.useNotification();
  const {
    currentStep,
    step2,
    setNextStep,
    setPrevStep,
    setVotingType,
    setSelectionQuantityState,
  } = useContext(StoryCreationContext);

  const openNotification = useCallback(() => {
    api.open({
      message: "Noticed Some Changes",
      description:
        "You currently made some changes and We’re pretty sure that it looks way nicer now!",
      duration: 1,
      placement: "topRight",
      className: "notification-custom-styles",
      icon: <AnanasOnBikeIcon />,
    });
  }, [api]);

  const handleSubmitStep = () => {
    openNotification();
    setTimeout(() => setNextStep(), 1000);
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
    <CreationFlowWrapper xs={24} sm={24} md={24} lg={14} xl={13} xxl={12}>
      <CreationFlowHeader
        handleDemo={handleDemo}
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
      {contextHolder}
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
