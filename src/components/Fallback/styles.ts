import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const FallbackWrapper = styled(motion.div)`
  height: 100vh;
  ${FlexBoxEnum.CenterHorizontal}
`;
