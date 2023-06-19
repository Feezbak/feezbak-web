import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordForm } from "@hooks/useResetPasswordForm";
import {
  ResetPasswordFormWrapper,
  PasswordInput,
  SubmitButton,
  BtnWrapper,
  FormItem,
} from "./styles";

const ResetPasswordForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const onSuccessAction = () => {
    navigate("/sign-in");
  };

  const { formErrors, formState, formControl, submitForm, requestLoading } =
    useResetPasswordForm(onSuccessAction, id ?? "");

  return (
    <ResetPasswordFormWrapper
      name="resetPasswordForm"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
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
            <PasswordInput size="large" onChange={onChange} value={value} />
          )}
          name="password"
          control={formControl}
        />
      </FormItem>
      <FormItem
        validateStatus={
          formErrors && formErrors["confirmPassword"] ? "error" : ""
        }
        name="confirmPassword"
        help={
          formErrors.confirmPassword && (
            <ErrorMessage message={formErrors.confirmPassword.message} />
          )
        }
      >
        <label htmlFor="confirmPassword">
          Confirm Password <sub>*</sub>
        </label>
        <Controller
          render={({ field: { onChange, value } }) => (
            <PasswordInput size="large" onChange={onChange} value={value} />
          )}
          name="confirmPassword"
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
          Reset Password
        </SubmitButton>
      </BtnWrapper>
    </ResetPasswordFormWrapper>
  );
};

export default ResetPasswordForm;
