import React, { lazy, useContext, useEffect, useMemo } from "react";
import { StoryStepEnum } from "@/enums";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { storyDefaultState } from "@/constants";
import { StoryCreationContext } from "@/context";
import {
  useManageStepInStorage as manageStepInStorage,
  usePageLeaveDetection,
} from "@/hooks";

const TitleAddingStep = lazy(() => import("../TitleAddingStep"));
const TypeDefiningStep = lazy(() => import("../TypeDefiningStep"));
const ShareSettingsStep = lazy(() => import("../ShareSettingsStep"));

type FakeType = {
  step1?: typeof storyDefaultState.step1;
  step2?: typeof storyDefaultState.step2;
  step3?: typeof storyDefaultState.step3;
};

const StepSelector = () => {
  usePageLeaveDetection();
  const { id: storyId } = useParams();
  const stringifyStep1 = JSON.stringify(storyDefaultState.step1);
  const stringifyStep2 = JSON.stringify(storyDefaultState.step2);
  const stringifyStep3 = JSON.stringify(storyDefaultState.step3);
  const {
    currentStep,
    step1,
    step2,
    step3,
    setStep1,
    setStep2,
    setStep3,
    setCurrentStep,
  } = useContext(StoryCreationContext);

  const requestLoading = false;
  const requestFakeData: FakeType | null = {};

  useEffect(() => {
    let storageDataById;

    if (storyId) {
      storageDataById = localStorage.getItem(storyId);
    }

    if (storageDataById) {
      const parsedDataFromStorage = JSON.parse(storageDataById);
      const lastFinishStep = Object.keys(parsedDataFromStorage).length;
      parsedDataFromStorage?.step1 && setStep1(parsedDataFromStorage.step1);
      parsedDataFromStorage?.step2 && setStep2(parsedDataFromStorage.step2);
      parsedDataFromStorage?.step3 && setStep3(parsedDataFromStorage.step3);
      setCurrentStep(lastFinishStep ? lastFinishStep : 1);
    } else {
      //Todo call request to get story steps data.
    }
  }, [storyId]);

  //          useEffect(() => {
  //            //Todo put this feature in useRequest onSuccess body and remove useEffect.
  //            if (requestFakeData && !requestLoading) {
  //              const lastFinishStep = Object.keys(requestFakeData).length;
  //              requestFakeData?.step1 && setStep1(requestFakeData.step1);
  //              requestFakeData?.step2 && setStep2(requestFakeData.step2);
  //              requestFakeData?.step3 && setStep3(requestFakeData.step3);
  //              setCurrentStep(lastFinishStep ? lastFinishStep : 1);
  //            }
  //          }, [requestLoading]);

  const currentStepContent = useMemo(() => {
    if (currentStep === StoryStepEnum.TITLE_STEP) {
      return <TitleAddingStep />;
    } else if (currentStep === StoryStepEnum.TYPE_STEP) {
      return <TypeDefiningStep />;
    } else if (currentStep === StoryStepEnum.SHARE_SETTINGS_STEP) {
      return <ShareSettingsStep />;
    } else if (!currentStep) {
      return <Spin size="large" />;
    } else {
      return null;
    }
  }, [currentStep]);

  useEffect(() => {
    if (!requestLoading && storyId) {
      manageStepInStorage(step1, stringifyStep1, "step1", storyId);
    }
  }, [step1, storyId, stringifyStep1, requestLoading]);

  useEffect(() => {
    if (!requestLoading && storyId) {
      manageStepInStorage(step2, stringifyStep2, "step2", storyId);
    }
  }, [step2, storyId, stringifyStep2, requestLoading]);

  useEffect(() => {
    if (!requestLoading && storyId) {
      manageStepInStorage(step3, stringifyStep3, "step3", storyId);
    }
  }, [step3, storyId, stringifyStep3, requestLoading]);

  return currentStepContent;
};

export default StepSelector;
