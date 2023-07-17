import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "antd";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const LayersSelectionWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  border-radius: 2.75rem;
  background: ${StyleEnums.primary};
`;

export const LayerWrapper = styled(motion.div)`
  height: 100%;
  padding: 3.5rem 2rem;
  color: ${StyleEnums.white};
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
`;

export const LayerInfoContent = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  p {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.8rem;
    text-align: center;
  }
`;

export const NextBtn = styled(Button)`
  background: ${StyleEnums.black};
  color: ${StyleEnums.white};
  border-radius: 2rem;
  padding: 0 3rem;
  border: none;
  outline: none;
  font-weight: bold;
  margin-right: 0.25rem;
`;

export const SkipBtn = styled(Button)`
  background: ${StyleEnums.white};
  color: ${StyleEnums.black};
  border-radius: 2rem;
  padding: 0 3rem;
  border: 2px solid ${StyleEnums.black};
  outline: none;
  font-weight: bold;
`;

export const ActionsWrapper = styled.div`
  ${FlexBoxEnum.CenterHorizontal}
`;
