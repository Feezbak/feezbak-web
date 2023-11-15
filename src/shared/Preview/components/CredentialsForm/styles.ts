import styled from "styled-components";
import { Drawer, Button } from "antd";
import { ifProp } from "@/helpers";
import { motion } from "framer-motion";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const FormDrawer = styled(Drawer)<{
  readonly $isCreationMode: boolean;
}>`
  background: ${ifProp(
    "$isCreationMode",
    "rgba(255, 255, 255, 0.89)",
    StyleEnums.white
  )} !important;
  border-radius: ${ifProp("$isCreationMode", "1rem", "unset")};
  z-index: 2;
  pading: 1.5rem 1rem;
`;

export const CredTitle = styled.p`
  margin-top: 1rem;
  text-align: left;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: -0.4px;
`;

export const CloseBtn = styled(Button)`
  border-radius: 50%;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const DrawerContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;
