import styled, { css } from "styled-components";
import { Input, Button } from "antd";
import { ifProp } from "@/helpers";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { motion } from "framer-motion";
const { TextArea } = Input;

export const TextAreaWrapper = styled(motion.div)<{
  readonly $isFixed: boolean;
}>`
  position: ${ifProp("$isFixed", "absolute", "static")};
  z-index: 3;
  width: 84%;
  border-radius: 1.25rem;
  padding: 1.25rem;
  background: ${StyleEnums.white};
  ${FlexBoxEnum.CenterVertical}
`;

export const TextField = styled(TextArea)<{ readonly $isFullSize: boolean }>`
  width: 100%;
  padding: 0 0.25rem;
  border: none;
  height: ${ifProp("$isFullSize", "34rem !important", "unset")};
  outline: none;
  box-shadow: none;
  font-size: 1.25rem;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const btnStyles = css`
  border: none;
  width: 2.5rem !important;
  height: 2.5rem;
`;

export const SendMSGBtn = styled(Button)`
  margin-left: 0.25rem;
  ${btnStyles}
  ${FlexBoxEnum.CenterHorizontal}
`;

export const ResizeBtn = styled(Button)`
  background: ${StyleEnums.gray4};
  ${btnStyles}
  ${FlexBoxEnum.CenterHorizontal}
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const Title = styled.h3`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${StyleEnums.gray2};
`;

export const ActionsWrapper = styled.div`
  ${FlexBoxEnum.EndEndHorizontal}
`;
