import React, { useEffect, useMemo, useState } from "react";
import uuid from "react-uuid";
import { message } from "antd";
import { sendLinkByEmailAddresses } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { useParams } from "react-router-dom";
import TitleDescriptionPair from "../TitleDescriptionPair";
import AddEmailAddress from "./components/AddEmailAddress";
import EmailsList from "./components/EmailsList";
import SendEmailsFooter from "./components/SendEmailsFooter";
import { SendEmailAddressesWrapper } from "./styles";

export type EmailsListType = {
  email: string;
  id: string;
};

interface Props {
  emailsDefault: string[];
}

const SendToEmailAddresses = ({ emailsDefault }: Props) => {
  const { id: storyId } = useParams();
  const [emails, setEmail] = useState<EmailsListType[]>([]);

  const { run: shareToEmailAddresses, loading: sendEmailsLoading } = useRequest(
    (payload) => sendLinkByEmailAddresses(storyId!, payload),
    {
      manual: true,
      onSuccess: (resp) => {
        message.success("Your Story was succesfuly shared!");
        setEmail(resp.data.map((email: string) => ({ email, id: uuid() })));
      },
      onError: (error: any) => {
        message.error(error?.response?.data?.message);
      },
    }
  );

  useEffect(() => {
    if (emailsDefault) {
      setEmail(emailsDefault.map((email: string) => ({ email, id: uuid() })));
    }
  }, [emailsDefault]);

  const handleDeleteEmail = (id: string) => {
    const oldEmails = [...emails];
    const newEmails = oldEmails.filter((item) => item.id !== id);
    setEmail(newEmails);
  };

  const handleAddNewEmail = (email: string) => {
    if (email) {
      const oldEmails = [...emails];
      const hasAlreadyProvided = oldEmails.find((item) => item.email === email);
      if (!hasAlreadyProvided) {
        setEmail((ps) => [{ email, id: uuid() }, ...ps]);
      } else {
        message.info("Email Address was already provided!");
      }
    }
  };

  const newEmailAddresses = useMemo(() => {
    return emails.filter((item) => !emailsDefault.includes(item.email));
  }, [emails, emailsDefault]);

  const handleShareViaEmail = async () => {
    console.log(newEmailAddresses, 4444);
    if (newEmailAddresses.length) {
      const payload = {
        emails: newEmailAddresses.map((address) => address.email),
      };
      await shareToEmailAddresses(payload);
    }
  };

  return (
    <SendEmailAddressesWrapper>
      <TitleDescriptionPair
        title="Send Via Email"
        text="Your friends will receive a link to this feedback"
      />
      <AddEmailAddress handleAddNewEmail={handleAddNewEmail} />
      <EmailsList
        emailsDefault={emailsDefault}
        listData={emails}
        handleDeleteEmail={handleDeleteEmail}
      />
      <SendEmailsFooter
        isDisabled={!newEmailAddresses.length}
        loading={sendEmailsLoading}
        shareViaEmail={handleShareViaEmail}
      />
    </SendEmailAddressesWrapper>
  );
};

export default SendToEmailAddresses;
