import { NavigationHeader } from "@/shared";
import { links } from "./utils";
import { Outlet } from "react-router-dom";
import { DashboardContentWrapper } from "./styles";

//dashboar

const DashboardContent = () => {
  return (
    <DashboardContentWrapper xs={20} sm={20} md={20} lg={20} xl={15} xxl={15}>
      <NavigationHeader links={links} />
      <Outlet />
    </DashboardContentWrapper>
  );
};

export default DashboardContent;
