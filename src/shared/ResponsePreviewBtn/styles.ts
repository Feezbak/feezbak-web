import styled from "styled-components";
import { Button } from "antd";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { motion } from "framer-motion";
import { ifProp, prop } from "@/helpers";

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
  readonly $margin: string;
}>`
  padding: 0.875rem 1.25rem;
  outline: none;
  background: ${ifProp("$isActive", StyleEnums.primary, StyleEnums.white)};
  border-radius: 5rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.4px;
  height: 3.25rem;
  width: 100%;
  ${FlexBoxEnum.CenterVertical}
  border: 1px solid ${ifProp("$isActive", StyleEnums.white, StyleEnums.black)};
  color: ${ifProp("$isActive", StyleEnums.white, StyleEnums.black)};

  &:disabled {
    background: ${StyleEnums.gray5};
  }

  &:hover {
    color: ${StyleEnums.black} !important;
  }

  margin: ${prop("$margin")};
`;
