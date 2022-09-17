import { BaseSyntheticEvent } from "react";
import { SignUpEmailFormInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseSignUpByEmailFormResult {
  reset: UseFormReset<SignUpEmailFormInputs>;
  formErrors: DeepMap<SignUpEmailFormInputs, FieldError>;
  formControl: Control<SignUpEmailFormInputs>;
  formState: FormState<SignUpEmailFormInputs>;
  getFieldValue: UseFormGetValues<SignUpEmailFormInputs>;
  setPassValue: UseFormSetValue<SignUpEmailFormInputs>;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
