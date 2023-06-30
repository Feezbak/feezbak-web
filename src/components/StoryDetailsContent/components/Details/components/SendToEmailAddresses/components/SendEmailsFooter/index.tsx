import React from "react";
import { EmailFooterWrapper, Description, SendEmailsBtn } from "./styles";

interface Props {
  isDisabled: boolean;
  loading: boolean;
  shareViaEmail: () => void;
}

const SendEmailsFooter = ({ isDisabled, loading, shareViaEmail }: Props) => {
  return (
    <EmailFooterWrapper>
      <Description>
        Feezbak link will be sent to the emails you added above.
      </Description>
      <SendEmailsBtn
        type="primary"
        disabled={isDisabled}
        loading={loading}
        onClick={shareViaEmail}
      >
        Send Email
      </SendEmailsBtn>
    </EmailFooterWrapper>
  );
};

export default SendEmailsFooter;
