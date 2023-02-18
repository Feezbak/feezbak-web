import { createContext } from "react";

export type Step1Type = {
  title: string;
  titleColor: string;
  background: string;
};

export type StoryCreationDataType = {
  currentStep: number;
  step1: Step1Type;
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
