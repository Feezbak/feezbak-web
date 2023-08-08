import logoFeezbak from "@images/product_logo.svg";
import {
  ContactsWrapper,
  SocialLink,
  SocialLinksWrapper,
  TermsText,
} from "./styles";

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
