import { NavigationHeader } from "@/shared";
import { links, mobileMenuLinks } from "./utils";
import { Outlet } from "react-router-dom";
import { DashboardContentWrapper } from "./styles";

//dashboard

const DashboardContent = () => {
  return (
    <DashboardContentWrapper xs={22} sm={22} md={20} lg={20} xl={15} xxl={15}>
      <NavigationHeader links={links} mobileMenuLinks={mobileMenuLinks} />
      <Outlet />
    </DashboardContentWrapper>
  );
};

export default DashboardContent;
