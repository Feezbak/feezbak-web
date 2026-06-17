import SignInForm from "./components/SignInForm";
import signUpImgSrc from "@images/sign-in.webp";
import {
  SignInMainWrapper,
  SignInFormWrapper,
  ImageContainer,
  Content,
  TitleWrapper,
  Description,
} from "./styles";

const SignInContent = () => {
  return (
    <SignInMainWrapper>
      <SignInFormWrapper>
        <ImageContainer
          xs={0}
          sm={0}
          md={0}
          lg={12}
          xl={10}
          xxl={7}
          flex="center"
        >
          <img src={signUpImgSrc} alt="sign up" loading="lazy" />
        </ImageContainer>
        <Content xs={24} sm={24} md={12} lg={10} xl={9} xxl={7}>
          <TitleWrapper>
            <Description>
              Easiest way to gather feedback!
              <br />
              Sign in to your account now
            </Description>
          </TitleWrapper>
          <SignInForm />
        </Content>
      </SignInFormWrapper>
    </SignInMainWrapper>
  );
};

export default SignInContent;
