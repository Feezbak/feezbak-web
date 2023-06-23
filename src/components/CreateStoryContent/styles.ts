import styled from "styled-components";
import { Col } from "antd";
import { inLessThan } from "@/helpers";
import { motion } from "framer-motion";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const CreationFlowWrapper = styled(Col)`
  padding: 4rem 4rem 4rem 0;
  height: 100%;
  ${FlexBoxEnum.SpaceBetweenCenterVertical}

  ${inLessThan(BreakpointEnums.tablet)`
    padding: 1.5rem 1rem;
  `}
`;

export const AnimatedWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.CenterHorizontal}
`;
