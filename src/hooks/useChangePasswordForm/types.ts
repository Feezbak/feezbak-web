import { BaseSyntheticEvent } from "react";
import { ChangePasswordFormInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseChangePasswordFormResult {
  reset: UseFormReset<ChangePasswordFormInputs>;
  formErrors: DeepMap<ChangePasswordFormInputs, FieldError>;
  formControl: Control<ChangePasswordFormInputs>;
  formState: FormState<ChangePasswordFormInputs>;
  getFieldValue: UseFormGetValues<ChangePasswordFormInputs>;
  setValue: UseFormSetValue<ChangePasswordFormInputs>;
  requestLoading: boolean;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
