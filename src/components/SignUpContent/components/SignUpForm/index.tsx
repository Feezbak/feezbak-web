import { TextFormField, SelectWithAddFormField } from "@/shared";
import { Link } from "react-router-dom";
import { SignUpFormProps } from "./types";
import { useSignUpByEmailForm } from "@hooks/useSignUpByEmailForm";
import {
  SignUpFormWrapper,
  SubmitButton,
  Description,
  BtnWrapper,
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
      <SelectWithAddFormField
        label="I am a"
        name="profession"
        formControl={formControl}
      />
      <TextFormField
        formError={formErrors["email"]?.message}
        label="Email"
        name="email"
        type="email"
        formControl={formControl}
      />
      <TextFormField
        formError={formErrors["firstName"]?.message}
        label="First Name"
        name="firstName"
        formControl={formControl}
      />
      <TextFormField
        formError={formErrors["lastName"]?.message}
        label="Last Name"
        name="lastName"
        formControl={formControl}
      />
      <TextFormField
        formError={formErrors["password"]?.message}
        label="Password"
        name="password"
        type="password"
        isPassword={true}
        formControl={formControl}
        autoComplete="new-password"
      />
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
