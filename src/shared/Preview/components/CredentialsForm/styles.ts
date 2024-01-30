import styled from "styled-components";
import { Drawer, Button } from "antd";
import { ifProp } from "@/helpers";
import { motion } from "framer-motion";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const FormDrawer = styled(Drawer)<{
  readonly $isCreationMode: boolean;
}>`
  background: ${StyleEnums.white};
  border: ${ifProp("$isCreationMode", `1px solid ${StyleEnums.gray3}`, "none")};
  border-radius: 3rem;
  z-index: 2;
  padding: 0;
  .ant-drawer-body {
    padding: 1.5rem 1rem !important;
  }
`;

export const CredTitle = styled.p`
  margin-top: 1rem;
  text-align: left;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: -0.4px;
  max-width: 23.25rem;
`;

export const CloseBtn = styled(Button)`
  border-radius: 50%;
  border: none;
  width: 2.5rem !important;
  height: 2.5rem;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const DrawerContent = styled(motion.div)<{
  readonly $isCreationMode: boolean;
}>`
  width: 100%;
  height: 100%;
  padding: ${ifProp("$isCreationMode", "5%", "0")};
  ${FlexBoxEnum.CenterVertical}
`;

export const DrawerHeader = styled.div`
  max-width: 23.25rem;
`;
