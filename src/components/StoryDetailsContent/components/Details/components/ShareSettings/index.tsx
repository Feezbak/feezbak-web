import React, { useState } from "react";
import ShareSegmentSelection from "./components/ShareSegmentSelection";
import { ShareSettingsWrapper, ShareSettingsTitle } from "./styles";

const ShareSettings = () => {
  const [shareMethod, setShareMethod] = useState("");
  return (
    <ShareSettingsWrapper>
      <ShareSettingsTitle>Share Settings</ShareSettingsTitle>
      <ShareSegmentSelection
        setShareMethod={setShareMethod}
        shareMethod={shareMethod}
      />
    </ShareSettingsWrapper>
  );
};

export default ShareSettings;
