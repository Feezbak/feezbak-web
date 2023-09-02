import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const PageLoaderWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.CenterVertical}
`;
