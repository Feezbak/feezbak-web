import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { motion } from "framer-motion";

export const Form = styled(motion.div)`
  ${FlexBoxEnum.StartStartVertical}
`;
