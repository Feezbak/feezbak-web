import { UseChangePasswordFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { changePassword } from "@/api";
import { ChangePasswordFormInputs, ChangePasswordSchema } from "@/validations";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";

export default function useChangePasswordForm(): UseChangePasswordFormResult {
  const {
    handleSubmit,
    formState: { errors: formErrors },
    control: formControl,
    formState,
    reset,
    setValue,
    getValues: getFieldValue,
  } = useForm<ChangePasswordFormInputs>({
    mode: "all",
    resolver: joiResolver(ChangePasswordSchema, {
      errors: {
        wrap: {
          label: "",
        },
      },
      abortEarly: false,
    }),
  });

  const { run: runChangePassword, loading: requestLoading } = useRequest(
    (data) => changePassword(data),
    {
      manual: true,
      onSuccess: (res) => {
        if (res) {
          message.success("Password was successfuly changed!");
        }
      },
      onError: (error: any) => {
        console.error(error);
        message.error(error.response.data.message);
      },
    }
  );

  const submitForm = handleSubmit(async (data) => {
    await runChangePassword(data);
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
