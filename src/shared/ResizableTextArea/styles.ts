import styled from "styled-components";
import { Input, Button } from "antd";
import { ifProp } from "@/helpers";
import { FlexBoxEnum, StyleEnums } from "@/enums";
const { TextArea } = Input;

export const TextAreaWrapper = styled.div<{ readonly $isFixed: boolean }>`
  position: ${ifProp("$isFixed", "absolute", "static")};
  z-index: 3;
  width: 92%;
  border-radius: 1.25rem;
  padding: 1.25rem;
  background: ${StyleEnums.white};
  ${FlexBoxEnum.SpaceBetweenStartVertical}
`;

export const TextField = styled(TextArea)`
  width: 100%;
  padding: 0;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1rem;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const SendMSGBtn = styled(Button)`
  border: none;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  ${FlexBoxEnum.CenterHorizontal}
`;
