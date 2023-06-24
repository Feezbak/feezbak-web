import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.CenterHorizontal}
`;
