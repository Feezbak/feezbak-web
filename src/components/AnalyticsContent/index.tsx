import { useState } from "react";
import { Tabs } from "antd";
import { NavigationHeader } from "@/shared";
import { AnalyticsWrapper, AnalyticsTabsWrapper } from "./styles";
import { links, getMobileMenuLinks } from "./utils";
import { useParams } from "react-router-dom";
import StoryAnalytics from "./components/StoryAnalytics";

const SETTINGS_PLACEHOLDER = (
  <div
    style={{
      textAlign: "center",
      padding: "4rem 0",
      opacity: 0.45,
    }}
  >
    <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>⚙️</div>
    <h3 style={{ marginBottom: "0.5rem" }}>Story Settings</h3>
    <p>Configure your story options here — coming soon.</p>
  </div>
);

const TAB_ITEMS = [
  { key: "responses", label: "Responses", children: <StoryAnalytics /> },
  { key: "settings", label: "Settings", children: SETTINGS_PLACEHOLDER },
];

const AnalyticsContent = () => {
  const { storyId } = useParams();
  const [activeTab, setActiveTab] = useState("responses");

  return (
    <AnalyticsWrapper xs={22} sm={22} md={20} lg={20} xl={15} xxl={15}>
      <NavigationHeader
        links={links(storyId!)}
        mobileMenuLinks={getMobileMenuLinks(storyId!)}
      />
      <AnalyticsTabsWrapper>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={TAB_ITEMS}
          size="large"
        />
      </AnalyticsTabsWrapper>
    </AnalyticsWrapper>
  );
};

export default AnalyticsContent;
