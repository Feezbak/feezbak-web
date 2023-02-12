import React, { useState, lazy, useMemo } from "react";
import { storyDefaultState } from "@/constants";
import { StoryCreationContext } from "@/context";

const TitleAddingStep = lazy(() => import("./components/TitleAddingStep"));

const CreateStoryContent = () => {
  const [step, setStep] = useState(1);
  const [storyCreationData, setStoryCreationData] = useState(storyDefaultState);
  //todo need to fetch steps and story data from this component

  const currentStepContent = useMemo(() => {
    if (step === 1) {
      return <TitleAddingStep />;
    } else {
      return null;
    }
  }, [step]);

  return (
    <StoryCreationContext.Provider
      value={{ storyCreationData, setStoryCreationData }}
    >
      {currentStepContent}
    </StoryCreationContext.Provider>
  );
};

export default CreateStoryContent;
