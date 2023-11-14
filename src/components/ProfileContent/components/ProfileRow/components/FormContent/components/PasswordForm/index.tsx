import { opacityAnimation } from "@assets/framerAnimations";
import { TextFormField } from "@/shared";
import { useChangePasswordForm } from "@/hooks";
import {
  FormContainer,
  ChangePasswordFormWrapper,
  SubmitButton,
  BtnWrapper,
} from "./styles";

const PasswordForm = () => {
  const { formErrors, formState, formControl, submitForm, requestLoading } =
    useChangePasswordForm();

  return (
    <FormContainer {...opacityAnimation}>
      <ChangePasswordFormWrapper
        name="changePasswordForm"
        onFinish={() => submitForm()}
        autoComplete="off"
      >
        <TextFormField
          formError={formErrors["currentPassword"]?.message}
          label="Current Password"
          name="currentPassword"
          formControl={formControl}
        />
        <TextFormField
          formError={formErrors["newPassword"]?.message}
          label="New Password"
          name="newPassword"
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
            Change Password
          </SubmitButton>
        </BtnWrapper>
      </ChangePasswordFormWrapper>
    </FormContainer>
  );
};

export default PasswordForm;
