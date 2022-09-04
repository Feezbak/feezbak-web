import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
// import { RegexEnums } from "@/enums";
import { Input } from "antd";
import { Link } from "react-router-dom";
import {
  SignInFormWrapper,
  FormItem,
  SubmitButton,
  BtnWrapper,
  Description,
} from "./styles";

const SignInForm = () => {
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  const passRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,32}$/;
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit((data: any) => {
    console.log("Success:", data);
    setTimeout(
      () =>
        reset({
          password: "",
          email: "",
        }),
      1000
    );
  });

  return (
    <SignInFormWrapper
      name="signInForm"
      onFinish={() => onSubmit()}
      autoComplete="off"
    >
      <FormItem
        name="email"
        validateStatus={errors && errors["email"] ? "error" : ""}
        help={errors.email && <ErrorMessage message={errors.email.message} />}
      >
        <label htmlFor="email">
          Email <sub>*</sub>
        </label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <Input
              type="email"
              size="large"
              onChange={onChange}
              value={value}
            />
          )}
          name="email"
          control={control}
          defaultValue=""
          rules={{
            pattern: {
              value: emailRegExp,
              message: "Invalid format of email",
            },
            required: {
              value: true,
              message: "Email is required!",
            },
          }}
        />
      </FormItem>
      <FormItem
        validateStatus={errors && errors["password"] ? "error" : ""}
        name="password"
        help={
          errors.password && <ErrorMessage message={errors.password.message} />
        }
      >
        <label htmlFor="password">
          Password <sub>*</sub>
        </label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <Input.Password size="large" onChange={onChange} value={value} />
          )}
          name="password"
          control={control}
          defaultValue=""
          rules={{
            pattern: {
              value: passRegExp,
              message: "Invalid format of password",
            },
            required: {
              value: true,
              message: "Password is required!",
            },
          }}
        />
      </FormItem>
      <BtnWrapper>
        <SubmitButton type="primary" htmlType="submit">
          Sign In
        </SubmitButton>
        <Description>
          If you are new, try to <Link to="/sign-up">Sign up</Link>
        </Description>
      </BtnWrapper>
    </SignInFormWrapper>
  );
};

export default SignInForm;
