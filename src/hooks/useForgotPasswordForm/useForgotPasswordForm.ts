import { UseForgotPasswordFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { forgotPassword } from "@/api";
import { ForgotPasswordFormInputs, ForgotPasswordSchema } from "@/validations";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";

export default function useForgotPasswordForm(
  onSuccessAction: () => void
): UseForgotPasswordFormResult {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue: setPassValue,
    getValues: getFieldValue,
  } = useForm<ForgotPasswordFormInputs>({
    mode: "all",
    resolver: joiResolver(ForgotPasswordSchema, {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    }),
  });

  const { run: runForgotPassword, loading: requestLoading } = useRequest(
    (data) => forgotPassword(data),
    {
      manual: true,
      onSuccess: (res) => {
        if (res) {
          onSuccessAction();
          setTimeout(
            () =>
              reset({
                email: "",
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
    runForgotPassword(data);
  });

  return {
    reset,
    formErrors,
    formControl,
    formState,
    setPassValue,
    getFieldValue,
    submitForm,
    requestLoading,
  };
}
