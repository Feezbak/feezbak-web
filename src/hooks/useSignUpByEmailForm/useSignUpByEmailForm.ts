import { UseSignUpByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { registerUser } from "@/api";
import { message } from "antd";
import { SignUpEmailFormInputs, SignUpEmailSchema } from "@/validations";

export default function useSignUpByEmailForm(
  setAccountState: () => void
): UseSignUpByEmailFormResult {
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

  const submitForm = handleSubmit(async (data) => {
    try {
      const res = await registerUser("/auth/email/register", data);
      if (res) {
        setAccountState();
      }
    } catch (error: unknown) {
      console.error(error);
      message.error("Something went wrong, please try to register a bit later");
    }
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
