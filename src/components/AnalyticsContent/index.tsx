import { NavigationHeader } from "@/shared";
import { AnalyticsWrapper } from "./styles";
import { links, getMobileMenuLinks } from "./utils";
import { useParams, Outlet } from "react-router-dom";

const AnalyticsContent = () => {
  const { storyId } = useParams();

  return (
    <AnalyticsWrapper xs={22} sm={22} md={20} lg={20} xl={15} xxl={15}>
      <NavigationHeader
        links={links(storyId!)}
        mobileMenuLinks={getMobileMenuLinks(storyId!)}
      />
      <Outlet />
    </AnalyticsWrapper>
  );
};

export default AnalyticsContent;
