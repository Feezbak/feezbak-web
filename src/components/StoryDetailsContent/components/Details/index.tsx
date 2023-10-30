import ShareSettings from "./components/ShareSettings";
import SendEmailAddresses from "./components/SendToEmailAddresses";
import { DetailsWrapper } from "./styles";

interface Props {
  link: string;
  emailsDefault?: string[];
  title: string;
  background: string;
}

const Details = ({ link, title, background, emailsDefault = [] }: Props) => {
  return (
    <DetailsWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 200 }}
    >
      <ShareSettings title={title} background={background} link={link} />
      <SendEmailAddresses emailsDefault={emailsDefault} />
    </DetailsWrapper>
  );
};

export default Details;
