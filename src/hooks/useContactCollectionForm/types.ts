import { BaseSyntheticEvent } from "react";
import { ContactsCollectingInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseContactCollectionFormResult {
  reset: UseFormReset<ContactsCollectingInputs>;
  formErrors: DeepMap<ContactsCollectingInputs, FieldError>;
  formControl: Control<ContactsCollectingInputs>;
  formState: FormState<ContactsCollectingInputs>;
  getFieldValue: UseFormGetValues<ContactsCollectingInputs>;
  setValue: UseFormSetValue<ContactsCollectingInputs>;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
