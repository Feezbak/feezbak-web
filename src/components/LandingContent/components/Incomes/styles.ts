import styled from "styled-components";
import { motion } from "framer-motion";
import { inLessThan } from "@/helpers";
import { BreakpointEnums, FlexBoxEnum } from "@/enums";

export const IncomesImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  ${FlexBoxEnum.JustifyEndHorizontal}
  ${inLessThan(BreakpointEnums.mobile)`
    display: none;
  `}
`;

export const IncomesImg = styled(motion.img)`
  width: 100%;
  max-width: 586px;
  height: auto;
  max-height: 600px;
`;
