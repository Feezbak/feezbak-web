import React from "react";
import { Dropdown } from "antd";
import { MenuItems } from "./utils";
import { CreatorAvatar } from "./styles";
import { UserOutlined } from "@ant-design/icons";
import { logOut } from "@/api";
import useRequest from "@ahooksjs/use-request";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const CreatorDropdownMenu = () => {
  const navigate = useNavigate();

  const { run: runLogout } = useRequest((key) => logOut(key ?? ""), {
    manual: true,
    onSuccess: () => {
      localStorage.removeItem("userData");
      navigate("/sign-in");
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message ?? "");
    },
  });

  const handleLogout = () => {
    runLogout("someKey");
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
