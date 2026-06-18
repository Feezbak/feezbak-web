import { useState } from "react";
import { Switch } from "antd";
import ShareSettings from "./components/ShareSettings";
import SendEmailAddresses from "./components/SendToEmailAddresses";
import { DetailsWrapper, ResponseToggleRow } from "./styles";

interface Props {
  link: string;
  emailsDefault?: string[];
  title: string;
  background: string;
}

const Details = ({ link, title, background, emailsDefault = [] }: Props) => {
  const [responsesOpen, setResponsesOpen] = useState(true);

  return (
    <DetailsWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 200 }}
    >
      <ResponseToggleRow>
        <div>
          <div className="toggle-label">Accepting responses</div>
          <div className="toggle-sub">
            {responsesOpen
              ? "Respondents can submit feedback"
              : "Story is closed to new responses"}
          </div>
        </div>
        <Switch
          checked={responsesOpen}
          onChange={(checked) => setResponsesOpen(checked)}
        />
      </ResponseToggleRow>
      <ShareSettings title={title} background={background} link={link} />
      <SendEmailAddresses emailsDefault={emailsDefault} />
    </DetailsWrapper>
  );
};

export default Details;
