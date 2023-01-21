import React from "react";
import { Dropdown } from "antd";
import { MenuItems } from "./utils";
import { CreatorAvatar } from "./styles";
import { useNavigate } from "react-router-dom";

const CreatorDropdownMenu = () => {
  const navigate = useNavigate();
  const items = MenuItems(
    () => navigate("/profile"),
    () => navigate("/")
  );
  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <CreatorAvatar
        size={{ xs: 20, sm: 22, md: 30, lg: 40, xl: 48, xxl: 48 }}
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </Dropdown>
  );
};

export default CreatorDropdownMenu;
