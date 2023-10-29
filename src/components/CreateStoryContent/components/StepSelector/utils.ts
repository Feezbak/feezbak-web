import { message } from "antd";
import { Step1Type, Step2Type, Step3Type } from "@/constants";

export function setStoryDataToStore(
  responseData: any,
  setStep1: (data: Step1Type) => void,
  setStep2: (data: Step2Type) => void,
  setStep3: (data: Step3Type) => void,
  setCurrentStep: (stepNumber: number) => void
) {
  const {
    title,
    titleColor,
    background,
    shareType,
    isInfoCollectionAllowed,
    userInfoFields,
    type,
    imageVoting,
    response,
    isMultiple,
  } = responseData;

  if (responseData.progress === "step1") {
    setStep1({
      title,
      titleColor,
      background,
    });
    setCurrentStep(1);
  } else if (responseData.progress === "step2") {
    setStep1({
      title,
      titleColor,
      background,
    });
    setStep2({
      type,
      isMultiple,
      imageVoting,
      response,
    });
    setCurrentStep(2);
  } else if (responseData.progress === "step3") {
    setStep1({
      title,
      titleColor,
      background,
    });
    setStep2({
      type,
      isMultiple,
      imageVoting,
      response,
    });
    setStep3({
      shareType,
      isInfoCollectionAllowed,
      userInfoFields,
    });
    setCurrentStep(3);
  } else {
    message.error("Sorry, cannot find last saved step!");
  }
}
