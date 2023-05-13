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
import { useParams } from "react-router-dom";
import { storyDefaultState } from "@/constants";
import { StoryCreationContext } from "@/context";

const TitleAddingStep = lazy(() => import("../TitleAddingStep"));
const TypeDefiningStep = lazy(() => import("../TypeDefiningStep"));
const ShareSettingsStep = lazy(() => import("../ShareSettingsStep"));

const StepSelector = () => {
  const { id: storyId } = useParams();
  const stringifyStep1 = JSON.stringify(storyDefaultState.step1);
  const stringifyStep2 = JSON.stringify(storyDefaultState.step2);
  const stringifyStep3 = JSON.stringify(storyDefaultState.step3);
  const [api, contextHolder] = notification.useNotification();
  const { currentStep, step1, step2, step3 } = useContext(StoryCreationContext);

  const currentStepContent = useMemo(() => {
    if (currentStep === StoryStepEnum.TITLE_STEP) {
      return <TitleAddingStep />;
    } else if (currentStep === StoryStepEnum.TYPE_STEP) {
      return <TypeDefiningStep />;
    } else if (currentStep === StoryStepEnum.SHARE_SETTINGS_STEP) {
      return <ShareSettingsStep />;
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
    const stringifyStoreStep = JSON.stringify(step1);
    if (stringifyStoreStep !== stringifyStep1 && storyId) {
      const dataOfStorage = localStorage.getItem(storyId);
      if (dataOfStorage) {
        const parsedStorage = JSON.parse(dataOfStorage);
        const newStorageData = {
          ...parsedStorage,
          step1,
        };
        localStorage.setItem(storyId, JSON.stringify(newStorageData));
      } else {
        localStorage.setItem(
          storyId,
          JSON.stringify({ step1: stringifyStoreStep })
        );
      }
    }
  }, [step1, storyId, stringifyStep1]);

  useEffect(() => {
    const stringifyStoreStep = JSON.stringify(step2);
    if (stringifyStoreStep !== stringifyStep2 && storyId) {
      const dataOfStorage = localStorage.getItem(storyId);
      if (dataOfStorage) {
        const parsedStorage = JSON.parse(dataOfStorage);
        const newStorageData = {
          ...parsedStorage,
          step2,
        };
        localStorage.setItem(storyId, JSON.stringify(newStorageData));
      } else {
        localStorage.setItem(
          storyId,
          JSON.stringify({ step2: stringifyStoreStep })
        );
      }
    }
  }, [step2, storyId, stringifyStep2]);

  useEffect(() => {
    const stringifyStoreStep = JSON.stringify(step3);
    if (stringifyStoreStep !== stringifyStep3 && storyId) {
      const dataOfStorage = localStorage.getItem(storyId);
      if (dataOfStorage) {
        const parsedStorage = JSON.parse(dataOfStorage);
        const newStorageData = {
          ...parsedStorage,
          step3,
        };
        localStorage.setItem(storyId, JSON.stringify(newStorageData));
      } else {
        localStorage.setItem(
          storyId,
          JSON.stringify({ step3: stringifyStoreStep })
        );
      }
    }
  }, [step3, storyId, stringifyStep3]);

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
