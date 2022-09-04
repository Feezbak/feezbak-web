import React from "react";
import SignUpForm from "./components/SignUpForm";
import signUpImgSrc from "@images/sign-up.png";
import {
  SignUpMainWrapper,
  SignUpFormWrapper,
  ImageContainer,
  Content,
  TitleWrapper,
  Title,
  Description,
} from "./styles";

const SignUpContent = () => {
  return (
    <SignUpMainWrapper>
      <SignUpFormWrapper>
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
            <Title>Easiest way to gather feedback!</Title>
            <Description>Create your account now</Description>
          </TitleWrapper>
          <SignUpForm />
        </Content>
      </SignUpFormWrapper>
    </SignUpMainWrapper>
  );
};

export default SignUpContent;
