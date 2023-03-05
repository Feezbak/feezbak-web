import { createContext } from "react";
import { responseBtnListDefaultState } from "@/constants";
import { StoryTypeEnum, ResponseTypeEnum } from "@/enums";

export type Step1Type = {
  title: string;
  titleColor: string;
  background: string;
};

export type Step2Type = {
  isMultiple: boolean;
  type: StoryTypeEnum;
  imageVoting: {
    isImageAttached: boolean;
    isSquare: boolean;
    selectedImgSrc: string;
    response: {
      responseType: ResponseTypeEnum;
      responseBtnList: typeof responseBtnListDefaultState;
    };
  };
};

export type StoryCreationDataType = {
  currentStep: number;
  step1: Step1Type;
  step2: Step2Type;
};
export interface StoryCreationContextProps {
  storyCreationData: StoryCreationDataType;
  setStoryCreationData: (
    story: (ps: StoryCreationDataType) => StoryCreationDataType
  ) => void;
}

export const StoryCreationContext = createContext(
  {} as StoryCreationContextProps
);
