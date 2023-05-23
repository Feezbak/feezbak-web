import styled from "styled-components";
import { Row } from "antd";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const LayoutWrapper = styled(Row)`
  width: 100%;
  flex-wrap: wrap;
`;

export const AnimateDiv = styled(motion.div)`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.CenterHorizontal}
  flex-wrap: wrap;
`;
