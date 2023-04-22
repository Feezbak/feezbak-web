import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
import { Input } from "antd";
import { useForgotPasswordForm } from "@hooks/useForgotPasswordForm";
import {
  ForgotPasswordFormWrapper,
  FormItem,
  SubmitButton,
  BtnWrapper,
} from "./styles";

const ForgotPasswordForm = () => {
  const onSuccessAction = () => {
    console.log("Forgot Password worked");
  };

  const { formErrors, formState, formControl, submitForm } =
    useForgotPasswordForm(onSuccessAction);

  return (
    <ForgotPasswordFormWrapper
      name="forgotPasswordForm"
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
      <BtnWrapper>
        <SubmitButton
          type="primary"
          htmlType="submit"
          disabled={!formState.isDirty || !formState.isValid}
        >
          Reset Password
        </SubmitButton>
      </BtnWrapper>
    </ForgotPasswordFormWrapper>
  );
};

export default ForgotPasswordForm;
