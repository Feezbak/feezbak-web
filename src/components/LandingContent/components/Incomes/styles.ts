import styled from "styled-components";
import { motion } from "framer-motion";

export const IncomesImgWrapper = styled.div`
  flex: 1;
  width: 42%;
  height: 100%;
  position: relative;
`;

export const IncomesImg = styled(motion.img)`
  position: absolute;
  width: 85%;
  right: 0;
`;
