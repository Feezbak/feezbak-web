import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage, SelectWithAdd } from "@/shared";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { SignUpFormProps } from "./types";
import { useSignUpByEmailForm } from "@hooks/useSignUpByEmailForm";
import {
  SignUpFormWrapper,
  FormItem,
  SubmitButton,
  BtnWrapper,
  Description,
} from "./styles";

const SignUpForm = ({ setAccountState }: SignUpFormProps) => {
  const { formErrors, formState, formControl, submitForm, requestLoading } =
    useSignUpByEmailForm(setAccountState);

  return (
    <SignUpFormWrapper
      name="signUpForm"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      <FormItem name="profession">
        <label htmlFor="profession">I am a</label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <SelectWithAdd value={value} onChange={onChange} />
          )}
          name="profession"
          control={formControl}
        />
      </FormItem>
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
        name="firstName"
        validateStatus={formErrors && formErrors["firstName"] ? "error" : ""}
        help={
          formErrors.firstName && (
            <ErrorMessage message={formErrors.firstName.message} />
          )
        }
      >
        <label htmlFor="firstName">
          Firstname <sub>*</sub>
        </label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <Input size="large" onChange={onChange} value={value} />
          )}
          name="firstName"
          control={formControl}
        />
      </FormItem>
      <FormItem
        name="lastname"
        validateStatus={formErrors && formErrors["lastName"] ? "error" : ""}
        help={
          formErrors.lastName && (
            <ErrorMessage message={formErrors.lastName.message} />
          )
        }
      >
        <label htmlFor="lastName">
          Lastname <sub>*</sub>
        </label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <Input size="large" onChange={onChange} value={value} />
          )}
          name="lastName"
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
          loading={requestLoading}
          disabled={!formState.isDirty || !formState.isValid}
        >
          Create Now
        </SubmitButton>
        <Description>
          I do have an account and I want to <Link to="/sign-in">Sign in</Link>
        </Description>
      </BtnWrapper>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;
