import { UseSignInByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { loginUser } from "@/api";
import { SignInEmailFormInputs, SignInEmailSchema } from "@/validations";
import { message } from "antd";
import { useSetRecoilState } from "recoil";
import { userData } from "@/recoil";
import useRequest from "@ahooksjs/use-request";

export default function useSignInByEmailForm(
  onUserSuccessLogin: () => void
): UseSignInByEmailFormResult {
  const setUserData = useSetRecoilState(userData);
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
          setUserData(res.data.user);
          localStorage.setItem("token", JSON.stringify(res.data.accessToken));
          localStorage.setItem(
            "refreshToken",
            JSON.stringify(res.data.refreshToken)
          );
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
        message.error(error?.response?.data?.message);
      },
    }
  );

  const submitForm = handleSubmit(async (data) => {
    await runLoginUser(data);
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
