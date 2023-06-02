import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { motion } from "framer-motion";

export const FormContainer = styled(motion.div)`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;
