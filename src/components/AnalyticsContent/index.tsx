import { NavigationHeader } from "@/shared";
import { AnalyticsWrapper } from "./styles";
import { links } from "./utils";
import { useParams, Outlet } from "react-router-dom";

const AnalyticsContent = () => {
  const { storyId } = useParams();

  return (
    <AnalyticsWrapper xs={20} sm={20} md={20} lg={20} xl={15} xxl={15}>
      <NavigationHeader links={links(storyId!)} />
      <Outlet />
    </AnalyticsWrapper>
  );
};

export default AnalyticsContent;
