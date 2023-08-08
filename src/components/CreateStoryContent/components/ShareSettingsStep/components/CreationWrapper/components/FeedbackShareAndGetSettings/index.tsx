import ShareSettings from "./components/ShareSettings";
import CollectUserInfo from "./components/CollectUserInfo";
import { ShareSettingsWrapper } from "./styles";

const FeedbackShareAndGetSettings = () => {
  return (
    <ShareSettingsWrapper>
      <ShareSettings />
      <CollectUserInfo />
    </ShareSettingsWrapper>
  );
};

export default FeedbackShareAndGetSettings;
