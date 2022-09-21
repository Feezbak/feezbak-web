import React from "react";
import SignInForm from "./components/SignInForm";
import signUpImgSrc from "@images/sign-in.png";
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
          lg={10}
          xl={8}
          xxl={6}
          flex="center"
        >
          <img src={signUpImgSrc} alt="sign up" />
        </ImageContainer>
        <Content xs={24} sm={24} md={12} lg={10} xl={9} xxl={7}>
          <TitleWrapper>
            Easiest way to gather feedback!
            <Description>Sign in to your account now</Description>
          </TitleWrapper>
          <SignInForm />
        </Content>
      </SignInFormWrapper>
    </SignInMainWrapper>
  );
};

export default SignInContent;
