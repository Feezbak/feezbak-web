import { Controller } from "react-hook-form";
import { ErrorMessage, SelectWithAdd } from "@/shared";
import { Link } from "react-router-dom";
import { SignUpFormProps } from "./types";
import { useSignUpByEmailForm } from "@hooks/useSignUpByEmailForm";
import {
  SignUpFormWrapper,
  CustomisedInput,
  PasswordInput,
  SubmitButton,
  Description,
  BtnWrapper,
  FormItem,
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
        <div>
          <label htmlFor="profession">I am a</label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <SelectWithAdd value={value} onChange={onChange} />
            )}
            name="profession"
            control={formControl}
          />
        </div>
      </FormItem>
      <FormItem
        name="email"
        validateStatus={formErrors?.email ? "error" : ""}
        help={
          formErrors.email && (
            <ErrorMessage message={formErrors.email.message} />
          )
        }
      >
        <div>
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
        </div>
      </FormItem>
      <FormItem
        name="firstName"
        validateStatus={formErrors?.firstName ? "error" : ""}
        help={
          formErrors.firstName && (
            <ErrorMessage message={formErrors.firstName.message} />
          )
        }
      >
        <div>
          <label htmlFor="firstName">
            Firstname <sub>*</sub>
          </label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <CustomisedInput size="large" onChange={onChange} value={value} />
            )}
            name="firstName"
            control={formControl}
          />
        </div>
      </FormItem>
      <FormItem
        name="lastname"
        validateStatus={formErrors?.lastName ? "error" : ""}
        help={
          formErrors.lastName && (
            <ErrorMessage message={formErrors.lastName.message} />
          )
        }
      >
        <div>
          <label htmlFor="lastName">
            Lastname <sub>*</sub>
          </label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <CustomisedInput size="large" onChange={onChange} value={value} />
            )}
            name="lastName"
            control={formControl}
          />
        </div>
      </FormItem>
      <FormItem
        validateStatus={formErrors?.password ? "error" : ""}
        name="password"
        help={
          formErrors.password && (
            <ErrorMessage message={formErrors.password.message} />
          )
        }
      >
        <div>
          <label htmlFor="password">
            Password <sub>*</sub>
          </label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <PasswordInput
                autoComplete="new-password"
                size="large"
                onChange={onChange}
                value={value}
              />
            )}
            name="password"
            control={formControl}
          />
        </div>
      </FormItem>
      <BtnWrapper>
        <SubmitButton
          type="primary"
          htmlType="submit"
          size="large"
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
