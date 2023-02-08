import styled from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
