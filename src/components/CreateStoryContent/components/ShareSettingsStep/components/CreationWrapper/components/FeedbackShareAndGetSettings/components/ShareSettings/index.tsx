import ShareSegmentSelection from "./components/ShareSegmentSelection";
import { ShareSettingsWrapper, ShareSettingsTitle } from "./styles";

const ShareSettings = () => {
  return (
    <ShareSettingsWrapper>
      <ShareSettingsTitle>Share Settings</ShareSettingsTitle>
      <ShareSegmentSelection />
    </ShareSettingsWrapper>
  );
};

export default ShareSettings;
