import { UseAddEmailAddressResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { AddEmailFormInputs, AddEmailSchema } from "@/validations";

export default function useAddEmailAddressForm(
  onSuccessAction: (data: { email?: string }) => void
): UseAddEmailAddressResult {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue: setPassValue,
    getValues: getFieldValue,
  } = useForm<AddEmailFormInputs>({
    mode: "all",
    resolver: joiResolver(AddEmailSchema, {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    }),
  });

  const submitForm = handleSubmit((data) => {
    onSuccessAction(data);
  });

  return {
    reset,
    formErrors,
    formControl,
    formState,
    setPassValue,
    getFieldValue,
    submitForm,
  };
}
