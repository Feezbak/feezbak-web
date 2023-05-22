import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const QRShareWrapper = styled(motion.div)`
  width: 100%;
  min-height: 8.5rem;
  ${FlexBoxEnum.CenterVertical}
`;
