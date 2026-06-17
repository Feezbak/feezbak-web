import { Step1Type, Step2Type, Step3Type } from "@/constants";
import { StoryProgressEnum } from "@/enums";

type StepType = Step1Type | Step2Type | Step3Type;
type SelectorType = StoryProgressEnum;

const STORAGE_VERSION = "1";

function getStorageData(storyId: string): Record<string, any> | null {
  const raw = localStorage.getItem(storyId);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed?.__v !== STORAGE_VERSION) {
      localStorage.removeItem(storyId);
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem(storyId);
    return null;
  }
}

function setStorageData(storyId: string, data: Record<string, any>) {
  localStorage.setItem(
    storyId,
    JSON.stringify({ ...data, __v: STORAGE_VERSION })
  );
}

function useManageStepInStorage(
  step: StepType,
  stringifyDefaultStep: string,
  stepSelector: SelectorType,
  storyId: string
) {
  const stringifyStoreStep = JSON.stringify(step);
  const parsedStorage = getStorageData(storyId);

  if (stringifyStoreStep !== stringifyDefaultStep) {
    const newData = { ...(parsedStorage ?? {}), [stepSelector]: step };
    setStorageData(storyId, newData);
  } else {
    if (parsedStorage) {
      delete parsedStorage[stepSelector];
      setStorageData(storyId, parsedStorage);
    }
  }
}

export default useManageStepInStorage;
