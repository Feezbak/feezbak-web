import React, { useState, lazy, useMemo, useCallback, useEffect } from "react";
import { storyDefaultState } from "@/constants";
import { StoryCreationContext } from "@/context";
import { StoryStepEnum } from "@/enums";
import { notification } from "antd";
import { AnanasOnBikeIcon } from "@/icons";

const TitleAddingStep = lazy(() => import("./components/TitleAddingStep"));
const TypeDefiningStep = lazy(() => import("./components/TypeDefiningStep"));

const CreateStoryContent = () => {
  const [api, contextHolder] = notification.useNotification();
  const [storyCreationData, setStoryCreationData] = useState(storyDefaultState);

  //todo need to fetch steps and story data from this component

  const currentStepContent = useMemo(() => {
    if (storyCreationData.currentStep === StoryStepEnum.TITLE_STEP) {
      return <TitleAddingStep />;
    } else if (storyCreationData.currentStep === StoryStepEnum.TYPE_STEP) {
      return <TypeDefiningStep />;
    } else {
      return null;
    }
  }, [storyCreationData.currentStep]);

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

  useEffect(() => {
    if (storyCreationData?.step1?.title !== storyDefaultState.step1.title) {
      openNotification();
    }
  }, [storyCreationData.step1, storyCreationData.step2]);

  return (
    <StoryCreationContext.Provider
      value={{ storyCreationData, setStoryCreationData }}
    >
      <>
        {currentStepContent}
        {contextHolder}
      </>
    </StoryCreationContext.Provider>
  );
};

export default CreateStoryContent;
