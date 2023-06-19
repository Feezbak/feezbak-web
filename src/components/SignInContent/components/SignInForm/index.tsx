import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSignInByEmailForm } from "@hooks/useSignInByEmailForm";
import {
  SignInFormWrapper,
  CustomisedInput,
  PasswordInput,
  SubmitButton,
  Description,
  BtnWrapper,
  FormItem,
} from "./styles";

const SignInForm = () => {
  const navigate = useNavigate();
  const onUserSuccessLogin = () => {
    navigate("/dashboard");
  };

  const { formErrors, formState, formControl, submitForm, requestLoading } =
    useSignInByEmailForm(onUserSuccessLogin);

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
        <>
          <label htmlFor="email">
            Email <sub>*</sub>
          </label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <CustomisedInput
                type="email"
                size="large"
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
            control={formControl}
          />
        </>
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
        <>
          <label htmlFor="password">
            Password <sub>*</sub>
          </label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <PasswordInput size="large" onChange={onChange} value={value} />
            )}
            name="password"
            control={formControl}
          />
        </>
      </FormItem>
      <BtnWrapper>
        <SubmitButton
          type="primary"
          htmlType="submit"
          loading={requestLoading}
          disabled={!formState.isDirty || !formState.isValid}
        >
          Sign In
        </SubmitButton>
        <Description>
          If you are new, try to <Link to="/sign-up">Sign up</Link>
        </Description>
        <Description>
          Maybe you <Link to="/forgot-password">Forgot your password?</Link>
        </Description>
      </BtnWrapper>
    </SignInFormWrapper>
  );
};

export default SignInForm;
