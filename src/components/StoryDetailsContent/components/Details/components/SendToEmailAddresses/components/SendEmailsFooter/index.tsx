import React from "react";
import { EmailFooterWrapper, Description, SendEmailsBtn } from "./styles";

const SendEmailsFooter = () => {
  return (
    <EmailFooterWrapper>
      <Description>
        Feezbak link will be sent to the emails you added above.
      </Description>
      <SendEmailsBtn type="primary">Send Email</SendEmailsBtn>
    </EmailFooterWrapper>
  );
};

export default SendEmailsFooter;
