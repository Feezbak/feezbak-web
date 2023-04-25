import { BaseSyntheticEvent } from "react";
import { ResetPasswordFormInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseResetPasswordFormResult {
  reset: UseFormReset<ResetPasswordFormInputs>;
  formErrors: DeepMap<ResetPasswordFormInputs, FieldError>;
  formControl: Control<ResetPasswordFormInputs>;
  formState: FormState<ResetPasswordFormInputs>;
  getFieldValue: UseFormGetValues<ResetPasswordFormInputs>;
  setValue: UseFormSetValue<ResetPasswordFormInputs>;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
