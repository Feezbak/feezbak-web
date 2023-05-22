import styled from "styled-components";
import { Drawer, Button } from "antd";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const FormDrawer = styled(Drawer)`
  background: rgba(255, 255, 255, 0.9) !important;
  border-radius: 2.75rem;
  z-index: 2;
`;

export const CredTitle = styled.h3`
  margin-top: 3rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
`;

export const CloseBtn = styled(Button)`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 0;
  border-radius: 50%;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const DrawerContent = styled(motion.div)`
  width: 100%;
  ${FlexBoxEnum.CenterVertical}
`;
