import styled from "styled-components";
import { Button } from "antd";
import { StyleEnums } from "@/enums";
import { motion } from "framer-motion";
import { ifProp } from "@/helpers";

export const AnimationWrapper = styled(motion.div)`
  margin-bottom: 1rem;
  width: 100%;
  overflow: hidden;

  span {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResponsePreviewButton = styled(Button)<{
  readonly $isActive: boolean;
}>`
  padding: 0.72rem 1.5rem;
  background: ${ifProp("$isActive", StyleEnums.primary, StyleEnums.white)};
  border-radius: 5rem;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  width: 100%;
  border: 2px solid ${ifProp("$isActive", StyleEnums.white, StyleEnums.black)};
  color: ${ifProp("$isActive", StyleEnums.white, StyleEnums.black)};

  &:disabled {
    background: ${StyleEnums.gray5};
  }
`;
