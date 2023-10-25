import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";
import { inLessThan } from "@/helpers";

export const QRShareWrapper = styled(motion.div)`
  width: 100%;
  min-height: 8.5rem;
  ${FlexBoxEnum.CenterVertical}

  ${inLessThan(BreakpointEnums.mobile)`
    min-height: unset;
   `};
`;
