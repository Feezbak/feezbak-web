import React from "react";
import { Dropdown } from "antd";
import { MenuItems } from "./utils";
import { CreatorAvatar } from "./styles";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userData } from "@/recoil";

const CreatorDropdownMenu = () => {
  const resetUserStore = useResetRecoilState(userData);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    resetUserStore();
    navigate("/sign-in");
  };

  const items = MenuItems(() => navigate("/profile"), handleLogout);

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <CreatorAvatar
        size={{ xs: 20, sm: 22, md: 30, lg: 40, xl: 48, xxl: 48 }}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

export default CreatorDropdownMenu;
