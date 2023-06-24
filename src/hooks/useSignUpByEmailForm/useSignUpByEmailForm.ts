import { UseSignUpByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { registerUser } from "@/api";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";
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

  const { run: runRegisterUser, loading: requestLoading } = useRequest(
    (data) => registerUser(data),
    {
      manual: true,
      onSuccess: (res) => {
        if (res) {
          setAccountState();
          setTimeout(
            () =>
              reset({
                password: "",
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
    await runRegisterUser(data);
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
