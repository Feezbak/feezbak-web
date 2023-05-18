import React, { useContext, useCallback } from "react";
import Editor from "./components/Editor";
import { AnanasOnBikeIcon } from "@/icons";
import { StoryCreationContext } from "@/context";
import { storyDefaultState } from "@/constants";
import { notification } from "antd";
import { CreationFlowWrapper } from "@components/CreateStoryContent/styles";
import { CreationFlowHeader, CreationFlowFooter } from "@/shared";

const CreationWrapper = () => {
  const [api, contextHolder] = notification.useNotification();
  const { currentStep, step1, setNextStep } = useContext(StoryCreationContext);

  const openNotification = useCallback(() => {
    console.log(3333);
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
      {contextHolder}
    </CreationFlowWrapper>
  );
};

export default CreationWrapper;
