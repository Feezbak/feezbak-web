import React from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
import { Input } from "antd";
import { useForgotPasswordForm } from "@hooks/useForgotPasswordForm";
import {
  ForgotPasswordFormWrapper,
  CustomisedInput,
  SubmitButton,
  BtnWrapper,
  FormItem,
} from "./styles";

interface Props {
  setEmailSendState: (state: boolean) => void;
}

const ForgotPasswordForm = ({ setEmailSendState }: Props) => {
  const onSuccessAction = () => {
    setEmailSendState(true);
  };

  const { formErrors, formState, formControl, submitForm, requestLoading } =
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
    </ForgotPasswordFormWrapper>
  );
};

export default ForgotPasswordForm;
