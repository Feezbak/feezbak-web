import React from "react";
import { StoryProvider } from "@/context";
import StepSelector from "./components/StepSelector";

const CreateStoryContent = () => {
  return (
    <StoryProvider>
      <StepSelector />
    </StoryProvider>
  );
};

export default CreateStoryContent;
