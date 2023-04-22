import { BaseSyntheticEvent } from "react";
import { ForgotPasswordFormInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseForgotPasswordFormResult {
  reset: UseFormReset<ForgotPasswordFormInputs>;
  formErrors: DeepMap<ForgotPasswordFormInputs, FieldError>;
  formControl: Control<ForgotPasswordFormInputs>;
  formState: FormState<ForgotPasswordFormInputs>;
  getFieldValue: UseFormGetValues<ForgotPasswordFormInputs>;
  setPassValue: UseFormSetValue<ForgotPasswordFormInputs>;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
