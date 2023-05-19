import React from "react";
import ShareSettings from "./components/ShareSettings";
import SendEmailAddresses from "./components/SendToEmailAddresses";
import { DetailsWrapper } from "./styles";

interface Props {
  link: string;
}

const Details = ({ link }: Props) => {
  return (
    <DetailsWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 200 }}
    >
      <ShareSettings link={link} />
      <SendEmailAddresses />
    </DetailsWrapper>
  );
};

export default Details;
