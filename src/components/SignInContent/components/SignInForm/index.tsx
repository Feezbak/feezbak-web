import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useSignInByEmailForm } from "@hooks/useSignInByEmailForm";
import {
  SignInFormWrapper,
  FormItem,
  SubmitButton,
  BtnWrapper,
  Description,
} from "./styles";

const SignInForm = () => {
  const { formErrors, formState, formControl, submitForm } =
    useSignInByEmailForm();

  return (
    <SignInFormWrapper
      name="signInForm"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      <FormItem
        name="email"
        validateStatus={formErrors && formErrors["email"] ? "error" : ""}
        help={
          formErrors.email && (
            <ErrorMessage message={formErrors.email.message} />
          )
        }
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
          control={formControl}
        />
      </FormItem>
      <FormItem
        validateStatus={formErrors && formErrors["password"] ? "error" : ""}
        name="password"
        help={
          formErrors.password && (
            <ErrorMessage message={formErrors.password.message} />
          )
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
          control={formControl}
        />
      </FormItem>
      <BtnWrapper>
        <SubmitButton
          type="primary"
          htmlType="submit"
          disabled={!formState.isDirty || !formState.isValid}
        >
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
