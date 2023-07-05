import React from "react";
import { Dropdown } from "antd";
import { MenuItems } from "./utils";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userData } from "@/recoil";
import { CreatorAvatar } from "./styles";

const CreatorDropdownMenu = () => {
  const resetUserStore = useResetRecoilState(userData);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    resetUserStore();
    navigate("/sign-in");
  };

  const items = MenuItems(() => navigate("/profile"), handleLogout);

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <CreatorAvatar
        size={{ xs: 40, sm: 40, md: 48, lg: 48, xl: 48, xxl: 48 }}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

export default CreatorDropdownMenu;
