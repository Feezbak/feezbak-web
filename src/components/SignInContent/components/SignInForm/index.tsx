import { TextFormField } from "@/shared";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSignInByEmailForm } from "@hooks/useSignInByEmailForm";
import {
  SignInFormWrapper,
  SubmitButton,
  Description,
  BtnWrapper,
} from "./styles";

const SignInForm = () => {
  const navigate = useNavigate();
  const onUserSuccessLogin = () => {
    navigate("/dashboard");
  };

  const { formErrors, formState, formControl, submitForm, requestLoading } =
    useSignInByEmailForm(onUserSuccessLogin);

  return (
    <SignInFormWrapper
      name="signInForm"
      onFinish={() => submitForm()}
      autoComplete="off"
    >
      <TextFormField
        formError={formErrors["email"]?.message}
        label="Email"
        name="email"
        type="email"
        formControl={formControl}
      />
      <TextFormField
        formError={formErrors["password"]?.message}
        label="Password"
        name="password"
        type="password"
        isPassword={true}
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
          Sign In
        </SubmitButton>
        <Description>
          If you are new, try to <Link to="/sign-up">Sign up</Link>
        </Description>
        <Description>
          Maybe you <Link to="/forgot-password">Forgot your password?</Link>
        </Description>
      </BtnWrapper>
    </SignInFormWrapper>
  );
};

export default SignInForm;
