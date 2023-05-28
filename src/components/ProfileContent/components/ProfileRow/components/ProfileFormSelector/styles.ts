import styled from "styled-components";
import { Col } from "antd";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { ifProp } from "@/helpers";

export const SelectorWrapper = styled(Col)`
  ${FlexBoxEnum.StartStartVertical}
  width: 100%;
`;

export const SelectorContainer = styled.ul`
  width: 100%;
  ${FlexBoxEnum.StartCenterVertical}
  list-style: none;
  box-shadow: 0px 4px 6px rgba(66, 39, 101, 0.06);
  border-radius: 0.75rem;
  padding: 0.5rem;
  margin: 0;
`;

export const SelectionItem = styled.li<{ readonly $isActive: boolean }>`
  width: 100%;
  transition: 0.3s;
  padding: 0.75rem;
  color: ${ifProp("$isActive", StyleEnums.primary, StyleEnums.black)};
  background: ${ifProp("$isActive", StyleEnums.gray4, StyleEnums.white)};
  margin-bottom: 0.5rem;

  &:last-child {
    margin: 0;
  }
`;
