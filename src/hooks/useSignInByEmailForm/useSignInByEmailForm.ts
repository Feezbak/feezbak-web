import { UseSignInByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { loginUser } from "@/api";
import { SignInEmailFormInputs, SignInEmailSchema } from "@/validations";
import { message } from "antd";

export default function useSignInByEmailForm(
  onUserSuccessLogin: () => void
): UseSignInByEmailFormResult {
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

  const submitForm = handleSubmit(async (data) => {
    try {
      const res = await loginUser("sign-in", data);
      if (res) {
        onUserSuccessLogin();
        setTimeout(
          () =>
            reset({
              password: "",
              email: "",
            }),
          1000
        );
      }
    } catch (error: any) {
      console.error(error);
      message.error(error.response.data.message);
    }
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
