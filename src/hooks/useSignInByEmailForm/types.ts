import { BaseSyntheticEvent } from "react";
import { SignInEmailFormInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseSignInByEmailFormResult {
  reset: UseFormReset<SignInEmailFormInputs>;
  formErrors: DeepMap<SignInEmailFormInputs, FieldError>;
  formControl: Control<SignInEmailFormInputs>;
  formState: FormState<SignInEmailFormInputs>;
  getFieldValue: UseFormGetValues<SignInEmailFormInputs>;
  setPassValue: UseFormSetValue<SignInEmailFormInputs>;
  requestLoading: boolean;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
