import React, { useState, lazy, useMemo } from "react";
import { StyleEnums } from "@/enums";
import { StoryCreationContext } from "@/context";

const TitleAddingStep = lazy(() => import("./components/TitleAddingStep"));

const CreateStoryContent = () => {
  const [step, setStep] = useState(1);
  const [storyCreationData, setStoryCreationData] = useState({
    step1: {
      title: "",
      background: StyleEnums.storyDefaultColor as string,
    },
  });
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
