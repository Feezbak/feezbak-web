import { UseSignUpByEmailFormResult } from "./types";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { registerUser } from "@/api";
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
    const res = await registerUser("account/api/register", data);
    console.log(res, 999);
    if (res) {
      setAccountState();
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
