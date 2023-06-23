import { Step1Type, Step2Type, Step3Type } from "@/constants";

type StepType = Step1Type | Step2Type | Step3Type;
type SelectorType = "step1" | "step2" | "step3";

function useManageStepInStorage(
  step: StepType,
  stringifyDefaultStep: string,
  stepSelector: SelectorType,
  storyId: string
) {
  const stringifyStoreStep = JSON.stringify(step);
  const dataOfStorage = localStorage.getItem(storyId);
  if (stringifyStoreStep !== stringifyDefaultStep) {
    if (dataOfStorage) {
      const parsedStorage = JSON.parse(dataOfStorage);
      const newStorageData = {
        ...parsedStorage,
        [stepSelector]: step,
      };
      localStorage.setItem(storyId, JSON.stringify(newStorageData));
    } else {
      localStorage.setItem(storyId, JSON.stringify({ [stepSelector]: step }));
    }
  } else {
    if (dataOfStorage) {
      const parsedStorage = JSON.parse(dataOfStorage);
      delete parsedStorage[stepSelector];
      localStorage.setItem(storyId, JSON.stringify(parsedStorage));
    }
  }
}

export default useManageStepInStorage;
