import { NavigationHeader } from "@/shared";
import { links } from "@components/DashboardContent/utils";
import { Outlet } from "react-router-dom";
import ProfileRow from "./components/ProfileRow";
import { ProfileContentWrapper } from "./styles";

const ProfileContent = () => {
  return (
    <ProfileContentWrapper xs={20} sm={20} md={20} lg={20} xl={15} xxl={15}>
      <NavigationHeader links={links} />
      <ProfileRow />
      <Outlet />
    </ProfileContentWrapper>
  );
};

export default ProfileContent;
