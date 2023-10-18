import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
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

  const {
    formErrors,
    formState,
    formControl,
    trigger,
    submitForm,
    requestLoading,
  } = useForgotPasswordForm(onSuccessAction);

  useEffect(() => {
    if (formState.isDirty) {
      trigger("forgotEmail");
    }
  }, [formState.isDirty, trigger]);

  return (
    <ForgotPasswordFormWrapper
      name="forgotPasswordForm"
      onFinish={() => submitForm()}
    >
      <FormItem
        name="forgotEmail"
        validateStatus={formErrors?.["forgotEmail"] ? "error" : ""}
        help={
          formErrors.forgotEmail && (
            <ErrorMessage message={formErrors.forgotEmail.message} />
          )
        }
      >
        <>
          <label htmlFor="forgotEmail">
            Email <sub>*</sub>
          </label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <CustomisedInput
                type="email"
                size="large"
                value={value}
                onChange={onChange}
              />
            )}
            name="forgotEmail"
            control={formControl}
          />
        </>
      </FormItem>
      <BtnWrapper>
        <SubmitButton
          size="large"
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
