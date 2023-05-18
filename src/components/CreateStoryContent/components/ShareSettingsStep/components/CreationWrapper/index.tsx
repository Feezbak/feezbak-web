import React, { useContext, useCallback } from "react";
import { StoryCreationContext } from "@/context";
import { CreationFlowFooter, CreationFlowHeader } from "@/shared";
import { notification } from "antd";
import { AnanasOnBikeIcon } from "@/icons";
import FeedbackShareAndGetSettings from "./components/FeedbackShareAndGetSettings";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";

const CreationWrapper = () => {
  const [api, contextHolder] = notification.useNotification();
  const { currentStep, setNextStep, setPrevStep } =
    useContext(StoryCreationContext);

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

  const handleFinalize = () => {
    openNotification();
    setTimeout(() => setNextStep(), 1000);
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
      {contextHolder}
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
