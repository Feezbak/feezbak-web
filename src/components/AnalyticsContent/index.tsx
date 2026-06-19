import { useState } from "react";
import { Tabs } from "antd";
import { NavigationHeader } from "@/shared";
import { AnalyticsWrapper, AnalyticsTabsWrapper } from "./styles";
import { links, getMobileMenuLinks } from "./utils";
import { useParams } from "react-router-dom";
import StoryAnalytics from "./components/StoryAnalytics";
import StorySettings from "./components/StorySettings";

const TAB_ITEMS = [
  { key: "responses", label: "Responses", children: <StoryAnalytics /> },
  { key: "settings", label: "Settings", children: <StorySettings /> },
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
