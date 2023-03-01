import React, { useState, lazy, useMemo } from "react";
import { storyDefaultState } from "@/constants";
import { StoryCreationContext } from "@/context";
import { StoryStepEnum } from "@/enums";

const TitleAddingStep = lazy(() => import("./components/TitleAddingStep"));
const TypeDefiningStep = lazy(() => import("./components/TypeDefiningStep"));

const CreateStoryContent = () => {
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

  return (
    <StoryCreationContext.Provider
      value={{ storyCreationData, setStoryCreationData }}
    >
      {currentStepContent}
    </StoryCreationContext.Provider>
  );
};

export default CreateStoryContent;
