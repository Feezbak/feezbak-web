import React from "react";
import ShareSettings from "./components/ShareSettings";
import SendEmailAddresses from "./components/SendToEmailAddresses";
import { DetailsWrapper } from "./styles";

interface Props {
  link: string;
  emailsDefault?: string[];
}

const Details = ({ link, emailsDefault = [] }: Props) => {
  return (
    <DetailsWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 200 }}
    >
      <ShareSettings link={link} />
      <SendEmailAddresses emailsDefault={emailsDefault} />
    </DetailsWrapper>
  );
};

export default Details;
