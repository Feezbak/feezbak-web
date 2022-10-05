import React from "react";
import {
  ContactsWrapper,
  SocialLink,
  SocialLinksWrapper,
  TermsText,
} from "./styles";
import logoFeezbak from "@images/feezbak-logo-black.svg";

const Contacts = () => {
  return (
    <ContactsWrapper>
      <img src={logoFeezbak} alt="logo" loading="lazy" />
      <SocialLinksWrapper>
        <SocialLink>Linkedin</SocialLink>
        <SocialLink>Twitter</SocialLink>
        <SocialLink>Whatsapp</SocialLink>
        <SocialLink>Instagram</SocialLink>
        <TermsText>
          Cookies are not set and no personal data is collected. Terms and
          Conditions.
        </TermsText>
      </SocialLinksWrapper>
    </ContactsWrapper>
  );
};

export default Contacts;
