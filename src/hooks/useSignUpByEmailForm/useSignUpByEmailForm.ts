import { UseSignUpByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignUpEmailFormInputs, SignUpEmailSchema } from "@/validations";

export default function useSignUpByEmailForm(): UseSignUpByEmailFormResult {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue: setPassValue,
    getValues: getFieldValue,
  } = useForm<SignUpEmailFormInputs>({
    mode: "all",
    resolver: joiResolver(SignUpEmailSchema, {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    }),
  });

  const submitForm = handleSubmit((data) => {
    console.log(data, 888);
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
