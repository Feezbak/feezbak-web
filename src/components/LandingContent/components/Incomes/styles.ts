import styled from "styled-components";
import { motion } from "framer-motion";

export const IncomesImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const IncomesImg = styled(motion.img)`
  width: 586px;
  height: 600px;
`;
