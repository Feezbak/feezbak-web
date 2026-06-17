import { UseResetPasswordFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { resetPassword } from "@/api";
import { ResetPasswordFormInputs, ResetPasswordSchema } from "@/validations";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";
import { getErrorMessage } from "@helpers/errorMessage";

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
    (data) => resetPassword(data),
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
        message.error(getErrorMessage(error));
      },
    }
  );

  const submitForm = handleSubmit(async (data) => {
    await runResetPassword({ password: data.password, key: key });
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
