import { Dropdown } from "antd";
import { getMenuItems } from "./utils";
import { ProfileAvatarIcon } from "@/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { CreatorAvatar } from "./styles";

interface Props {
  handleLogout: () => void;
}

const CreatorDropdownMenu = ({ handleLogout }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = getMenuItems(() => navigate("/profile"), handleLogout);

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
      <CreatorAvatar
        size={{ xs: 40, sm: 40, md: 48, lg: 48, xl: 48, xxl: 48 }}
        icon={<ProfileAvatarIcon />}
      />
    </Dropdown>
  );
};

export default CreatorDropdownMenu;
