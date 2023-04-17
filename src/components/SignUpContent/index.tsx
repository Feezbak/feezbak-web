import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import signUpImgSrc from "@images/sign-up.png";
import EmailVerificationNotifier from "./components/EmailVerificationNotifier";
import {
  SignUpMainWrapper,
  SignUpFormWrapper,
  ImageContainer,
  Content,
  TitleWrapper,
  Title3,
  Description,
} from "./styles";

const SignUpContent = () => {
  const [isAccountCreated, setAccountState] = useState(false);

  const handleChangeAccountState = () => {
    setAccountState(true);
  };

  return (
    <SignUpMainWrapper>
      {isAccountCreated ? (
        <EmailVerificationNotifier setAccountState={setAccountState} />
      ) : (
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
            <img src={signUpImgSrc} alt="sign up" loading="lazy" />
          </ImageContainer>
          <Content xs={24} sm={24} md={12} lg={10} xl={9} xxl={7}>
            <TitleWrapper>
              <Title3>Easiest way to gather feedback!</Title3>
              <Description>Create your account now</Description>
            </TitleWrapper>
            <SignUpForm setAccountState={handleChangeAccountState} />
          </Content>
        </SignUpFormWrapper>
      )}
    </SignUpMainWrapper>
  );
};

export default SignUpContent;
