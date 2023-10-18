import { lazy, useContext, useEffect } from "react";
import { StoryStepEnum } from "@/enums";
import { Spin, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { storyDefaultState } from "@/constants";
import { StoryCreationContext } from "@/context";
import { getStoryById } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { setStoryDataToStore } from "./utils";
import {
  useManageStepInStorage as manageStepInStorage,
  usePageLeaveDetection,
} from "@/hooks";

const TitleAddingStep = lazy(() => import("../TitleAddingStep"));
const TypeDefiningStep = lazy(() => import("../TypeDefiningStep"));
const ShareSettingsStep = lazy(() => import("../ShareSettingsStep"));

const StepSelector = () => {
  usePageLeaveDetection();
  const navigate = useNavigate();
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

  const { run: getStoryData, loading: requestLoading } = useRequest(
    () => getStoryById(storyId ?? ""),
    {
      manual: true,
      onSuccess: (resp) => {
        if (resp?.data) {
          if (resp?.data?.progress !== "step3") {
            setStoryDataToStore(
              resp.data,
              setStep1,
              setStep2,
              setStep3,
              setCurrentStep
            );
          } else {
            navigate("/dashboard");
          }
        }
      },
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message);
      },
    }
  );

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
      getStoryData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyId]);

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
};

export default StepSelector;
