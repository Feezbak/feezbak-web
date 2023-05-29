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
  padding: 0.5rem 0;
  margin: 0;
`;

export const SelectionItem = styled.li<{ readonly $isActive: boolean }>`
  transition: 0.3s;
  cursor: pointer;
  width: 90%;
  height: 5vh;
  border-radius: 0.75rem;
  ${FlexBoxEnum.JustifyStartHorizontal}
  color: ${ifProp("$isActive", StyleEnums.primary, StyleEnums.black)};
  background: ${ifProp("$isActive", StyleEnums.gray5, StyleEnums.white)};
  margin-bottom: 0.5rem;

  &:last-child {
    margin: 0;
  }

  svg {
    margin: 0 0.25rem 0 0.75rem;
  }

  svg > path {
    stroke: ${ifProp("$isActive", StyleEnums.primary, StyleEnums.black)};
  }
`;
