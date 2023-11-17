import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "antd";
import { inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";

export const LayersSelectionWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  border-radius: 2.75rem;
  background: ${StyleEnums.primary};
  ${inLessThan(BreakpointEnums.mobile)`
     border-radius: 0;
  `}
`;

export const LayerWrapper = styled(motion.div)`
  height: 100%;
  padding: 3rem 2rem;
  color: ${StyleEnums.white};
  ${FlexBoxEnum.CenterVertical}
`;

export const LayerInfoContent = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.8rem;
    text-align: center;
  }
`;

export const NextBtn = styled(Button)`
  background: ${StyleEnums.white};
  color: ${StyleEnums.black};
  border-radius: 2rem;
  padding: 0 3rem;
  outline: none;
  font-weight: bold;
  margin-right: 0.25rem;
  border: 1px solid ${StyleEnums.black};
`;

export const SkipBtn = styled(Button)`
  background: ${StyleEnums.black};
  color: ${StyleEnums.white};
  border-radius: 2rem;
  padding: 0 3rem;
  outline: none;
  font-weight: bold;
  border: none;
`;

export const ActionsWrapper = styled.div`
  margin-top: 1rem;
  ${FlexBoxEnum.CenterHorizontal}
`;
