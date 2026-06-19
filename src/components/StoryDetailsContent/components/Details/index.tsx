import { useState } from "react";
import { Switch } from "antd";
import ShareSettings from "./components/ShareSettings";
import SendEmailAddresses from "./components/SendToEmailAddresses";
import UpgradeModal from "@/components/UpgradeModal";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";
import { DetailsWrapper, ResponseToggleRow, ProEmailTeaser } from "./styles";

interface Props {
  link: string;
  emailsDefault?: string[];
  title: string;
  background: string;
}

const Details = ({ link, title, background, emailsDefault = [] }: Props) => {
  const [responsesOpen, setResponsesOpen] = useState(true);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const user = useRecoilValue(userData);
  const isPro = user?.plan === "pro";

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
      {isPro ? (
        <SendEmailAddresses emailsDefault={emailsDefault} />
      ) : (
        <ProEmailTeaser onClick={() => setShowUpgrade(true)}>
          <span className="lock">🔒</span>
          <div>
            <div className="teaser-title">Send Via Email</div>
            <div className="teaser-sub">
              Upgrade to Pro to send invitation links directly to your
              respondents
            </div>
          </div>
          <span className="badge">Pro</span>
        </ProEmailTeaser>
      )}
      <UpgradeModal
        open={showUpgrade}
        onClose={() => setShowUpgrade(false)}
        reason="Send invitation links directly to respondents' inboxes."
      />
    </DetailsWrapper>
  );
};

export default Details;
