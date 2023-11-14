import { useEffect } from "react";
import { TextFormField } from "@/shared";
import { useForgotPasswordForm } from "@hooks/useForgotPasswordForm";
import { ForgotPasswordFormWrapper, SubmitButton, BtnWrapper } from "./styles";

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
      <TextFormField
        formError={formErrors["forgotEmail"]?.message}
        label="Email"
        name="forgotEmail"
        type="email"
        formControl={formControl}
      />
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
