import { UseResetPasswordFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { resetPassword } from "@/api";
import { ResetPasswordFormInputs, ResetPasswordSchema } from "@/validations";
import { message } from "antd";

export default function useResetPasswordForm(
  onSuccessAction: () => void
): UseResetPasswordFormResult {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue,
    getValues: getFieldValue,
  } = useForm<ResetPasswordFormInputs>({
    mode: "all",
    resolver: joiResolver(ResetPasswordSchema, {
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
      const res = await resetPassword(data);
      if (res) {
        onSuccessAction();
        setTimeout(
          () =>
            reset({
              password: "",
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
    setValue,
    getFieldValue,
    submitForm,
  };
}
