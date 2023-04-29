import { UseSignInByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { loginUser } from "@/api";
import { SignInEmailFormInputs, SignInEmailSchema } from "@/validations";
import { message } from "antd";
import useRequest from "@ahooksjs/use-request";

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

  const { run: runLoginUser, loading: requestLoading } = useRequest(
    (data) => loginUser(data),
    {
      manual: true,
      onSuccess: (res) => {
        if (res) {
          onUserSuccessLogin();
          localStorage.setItem("userData", JSON.stringify(res.data));
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
    runLoginUser(data);
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
