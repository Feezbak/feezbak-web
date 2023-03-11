import React, {
  lazy,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { StoryStepEnum } from "@/enums";
import { AnanasOnBikeIcon } from "@/icons";
import { notification } from "antd";
import { StoryCreationContext } from "@/context";

const TitleAddingStep = lazy(() => import("../TitleAddingStep"));
const TypeDefiningStep = lazy(() => import("../TypeDefiningStep"));

const StepSelector = () => {
  const [api, contextHolder] = notification.useNotification();
  const { currentStep } = useContext(StoryCreationContext);

  const currentStepContent = useMemo(() => {
    if (currentStep === StoryStepEnum.TITLE_STEP) {
      return <TitleAddingStep />;
    } else if (currentStep === StoryStepEnum.TYPE_STEP) {
      return <TypeDefiningStep />;
    } else {
      return null;
    }
  }, [currentStep]);

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
    currentStep !== 1 && openNotification();
  }, [currentStep, openNotification]);

  return (
    <>
      {currentStepContent}
      {contextHolder}
    </>
  );
};

export default StepSelector;
