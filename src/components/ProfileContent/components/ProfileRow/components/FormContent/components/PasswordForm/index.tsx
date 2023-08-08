import { opacityAnimation } from "@assets/framerAnimations";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@/shared";
import { useChangePasswordForm } from "@/hooks";
import {
  FormContainer,
  ChangePasswordFormWrapper,
  FormItem,
  SubmitButton,
  PasswordInput,
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
        <FormItem
          validateStatus={
            formErrors && formErrors["currentPassword"] ? "error" : ""
          }
          name="currentPassword"
          help={
            formErrors.currentPassword && (
              <ErrorMessage message={formErrors.currentPassword.message} />
            )
          }
        >
          <>
            <label htmlFor="currentPassword">
              Current Password <sub>*</sub>
            </label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <PasswordInput size="large" onChange={onChange} value={value} />
              )}
              name="currentPassword"
              control={formControl}
            />
          </>
        </FormItem>
        <FormItem
          validateStatus={
            formErrors && formErrors["newPassword"] ? "error" : ""
          }
          name="newPassword"
          help={
            formErrors.newPassword && (
              <ErrorMessage message={formErrors.newPassword.message} />
            )
          }
        >
          <>
            <label htmlFor="newPassword">
              New Password <sub>*</sub>
            </label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <PasswordInput size="large" onChange={onChange} value={value} />
              )}
              name="newPassword"
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
            Change Password
          </SubmitButton>
        </BtnWrapper>
      </ChangePasswordFormWrapper>
    </FormContainer>
  );
};

export default PasswordForm;
