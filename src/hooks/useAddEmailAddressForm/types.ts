import { BaseSyntheticEvent } from "react";
import { AddEmailFormInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseAddEmailAddressResult {
  reset: UseFormReset<AddEmailFormInputs>;
  formErrors: DeepMap<AddEmailFormInputs, FieldError>;
  formControl: Control<AddEmailFormInputs>;
  formState: FormState<AddEmailFormInputs>;
  getFieldValue: UseFormGetValues<AddEmailFormInputs>;
  setPassValue: UseFormSetValue<AddEmailFormInputs>;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
