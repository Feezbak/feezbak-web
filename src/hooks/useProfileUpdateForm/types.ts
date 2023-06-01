import { BaseSyntheticEvent } from "react";
import { UpdateProfileFormInputs } from "@/validations";
import {
  Control,
  DeepMap,
  FieldError,
  FormState,
  UseFormGetValues,
  UseFormSetValue,
  UseFormReset,
} from "react-hook-form";

export interface UseUpdateProfileFormResult {
  reset: UseFormReset<UpdateProfileFormInputs>;
  formErrors: DeepMap<UpdateProfileFormInputs, FieldError>;
  formControl: Control<UpdateProfileFormInputs>;
  formState: FormState<UpdateProfileFormInputs>;
  getFieldValue: UseFormGetValues<UpdateProfileFormInputs>;
  setValue: UseFormSetValue<UpdateProfileFormInputs>;
  requestLoading: boolean;
  submitForm: (
    e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
  ) => Promise<void>;
}
