import { UseSignInByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignInEmailFormInputs, SignInEmailSchema } from "@/validations";

export default function useSignInByEmailForm(): UseSignInByEmailFormResult {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue: setPassValue,
    getValues: getFieldValue,
  } = useForm<SignInEmailFormInputs>({
    mode: "all",
    resolver: joiResolver(SignInEmailSchema, {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    }),
  });

  const submitForm = handleSubmit((data) => {
    setTimeout(
      () =>
        reset({
          password: "",
          email: "",
        }),
      1000
    );
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
