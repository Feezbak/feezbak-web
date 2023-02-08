import React, { useState, lazy } from "react";

const TitleAddingStep = lazy(() => import("./components/TitleAddingStep"));
const CreateStoryContent = () => {
  const [step, setStep] = useState(1);
  //todo need to fetch steps and story data from this component
  if (step === 1) {
    return <TitleAddingStep />;
  } else {
    return null;
  }
};

export default CreateStoryContent;
