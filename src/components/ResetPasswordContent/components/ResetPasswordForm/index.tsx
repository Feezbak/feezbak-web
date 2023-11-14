import { TextFormField } from "@/shared";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordForm } from "@/hooks";
import { ResetPasswordFormWrapper, SubmitButton, BtnWrapper } from "./styles";

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
      <TextFormField
        formError={formErrors["password"]?.message}
        label="Password"
        name="password"
        formControl={formControl}
      />
      <TextFormField
        formError={formErrors["confirmPassword"]?.message}
        label="Confirm Password"
        name="confirmPassword"
        formControl={formControl}
      />
      <BtnWrapper>
        <SubmitButton
          type="primary"
          htmlType="submit"
          size="large"
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
