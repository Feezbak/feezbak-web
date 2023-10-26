import { CreatorMenuItem } from "./styles";
import type { MenuProps } from "antd";

export const MenuItems = (
  navigate: () => void,
  signOut: () => void
): MenuProps["items"] => [
  {
    key: "1",
    label: <CreatorMenuItem onClick={navigate}>Edit Profile</CreatorMenuItem>,
  },
  {
    key: "2",
    label: <CreatorMenuItem onClick={signOut}>Sign Out</CreatorMenuItem>,
  },
];
