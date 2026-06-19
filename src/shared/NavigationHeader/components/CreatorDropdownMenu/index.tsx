import { SyntheticEvent } from "react";
import { Dropdown } from "antd";
import { getMenuItems } from "./utils";
import { ProfileAvatarIcon } from "@/icons";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";
import { useNavigate, useLocation } from "react-router-dom";
import profileDefaultImgSrc from "@images/profile.webp";
import {
  CreatorAvatar,
  AvatarSkeleton,
  ProfileImage,
  PlanBadge,
  AvatarWrapper,
} from "./styles";

interface Props {
  handleLogout: () => void;
}

const CreatorDropdownMenu = ({ handleLogout }: Props) => {
  const profileData = useRecoilValue(userData);
  const navigate = useNavigate();
  const location = useLocation();
  const items = getMenuItems(() => navigate("/profile"), handleLogout);

  const handleBrokenImage = (
    event: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = profileDefaultImgSrc;
  };

  const isPro = profileData.plan === "pro";

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: location.pathname === "/profile" ? ["1"] : [],
      }}
      placement="bottom"
      arrow={true}
    >
      <AvatarWrapper>
        {profileData.loading ? (
          <AvatarSkeleton active={true} />
        ) : profileData?.avatarSrc?.length ? (
          <ProfileImage
            onError={handleBrokenImage}
            src={
              profileData.avatarSrc?.startsWith("http")
                ? profileData.avatarSrc
                : `${process.env.REACT_APP_API_URL}/${profileData.avatarSrc}`
            }
          />
        ) : (
          <CreatorAvatar
            size={{ xs: 40, sm: 40, md: 48, lg: 48, xl: 48, xxl: 48 }}
            icon={<ProfileAvatarIcon />}
          />
        )}
        {!profileData.loading && (
          <PlanBadge $isPro={isPro}>{isPro ? "Pro" : "Free"}</PlanBadge>
        )}
      </AvatarWrapper>
    </Dropdown>
  );
};

export default CreatorDropdownMenu;
