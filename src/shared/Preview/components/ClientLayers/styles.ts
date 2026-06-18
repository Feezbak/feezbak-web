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
  background: ${StyleEnums.white};
  ${inLessThan(BreakpointEnums.mobile)`
     border-radius: 0;
     height: 100dvh;
  `}
`;

export const LayerWrapper = styled(motion.div)`
  height: 100%;
  padding: 3rem 2rem;
  color: ${StyleEnums.white};
  ${FlexBoxEnum.EndCenterVertical}
`;

export const LayerInfoContent = styled.div`
  ${FlexBoxEnum.CenterVertical}
  height: 100%;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    text-align: center;
    color: ${StyleEnums.black};
    font-size: 1.375rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: -0.44px;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    color: ${StyleEnums.gray2};
  }
`;

export const LearnBtn = styled(Button)`
  outline: none;
  margin-right: 0.25rem;
`;

export const NextBtn = styled(Button)`
  outline: none;
  width: 100%;
  margin-right: 0.25rem;
  border: 1px solid ${StyleEnums.black};
`;

export const SkipBtn = styled(Button)`
  background: ${StyleEnums.black};
  color: ${StyleEnums.white};
  outline: none;
  border: none;
`;

export const ActionsWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const Illustration = styled.img`
  width: 12.5rem;
  margin-bottom: 1rem;
`;

export const ContextPill = styled.span`
  display: inline-block;
  background: ${StyleEnums.primary}14;
  color: ${StyleEnums.primary};
  border: 1px solid ${StyleEnums.primary}30;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 0.75rem;
`;
