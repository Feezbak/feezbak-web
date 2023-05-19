import React from "react";
import { EmailFooterWrapper, Description, SendEmailsBtn } from "./styles";

interface Props {
  isDisabled: boolean;
}

const SendEmailsFooter = ({ isDisabled }: Props) => {
  return (
    <EmailFooterWrapper>
      <Description>
        Feezbak link will be sent to the emails you added above.
      </Description>
      <SendEmailsBtn type="primary" disabled={isDisabled}>
        Send Email
      </SendEmailsBtn>
    </EmailFooterWrapper>
  );
};

export default SendEmailsFooter;
