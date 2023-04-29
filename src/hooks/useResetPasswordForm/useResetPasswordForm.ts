import { UseResetPasswordFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { resetPassword } from "@/api";
import { ResetPasswordFormInputs, ResetPasswordSchema } from "@/validations";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";

export default function useResetPasswordForm(
  onSuccessAction: () => void,
  key: string
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

  const { run: runResetPassword, loading: requestLoading } = useRequest(
    (data) => resetPassword(data, key),
    {
      manual: true,
      onSuccess: (res) => {
        if (res) {
          onSuccessAction();
          setTimeout(
            () =>
              reset({
                password: "",
                confirmPassword: "",
              }),
            1000
          );
        }
      },
      onError: (error: any) => {
        console.error(error);
        message.error(error.response.data.message);
      },
    }
  );

  const submitForm = handleSubmit(async (data) => {
    runResetPassword({ password: data.password });
  });

  return {
    reset,
    formErrors,
    formControl,
    formState,
    setValue,
    getFieldValue,
    submitForm,
    requestLoading,
  };
}
