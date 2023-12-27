import styled from "styled-components";
import { FlexBoxEnum, StyleEnums, BreakpointEnums } from "@/enums";
import { ifProp, prop, inLessThan } from "@/helpers";
import { Button } from "antd";

export const ButtonDataWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
    flex-wrap: wrap;
 `};

  &:last-child {
    margin: 0;
  }
`;

export const ProgressText = styled.div`
  width: 100%;
  position: relative;
  border-radius: 1rem;
  ${FlexBoxEnum.JustifyStartHorizontal}

  p {
    white-space: nowrap;
    position: absolute;
    left: 1.35rem;
    font-size: 1rem;
    line-height: 1.25rem
    font-weight: 500;
    letter-spacing: -0.32px;
  }
`;

export const ColoredProgress = styled.div<{ readonly $width: number }>`
  width: ${prop("$width")}%;
  border-radius: 1rem;
  height: 2.5rem;
  background: ${StyleEnums.gray5};
`;

export const ActionsAndInfoContainer = styled.div`
  margin-left: 1.875rem;
  ${inLessThan(BreakpointEnums.mobile)`
    margin: 1rem 0 0 0;
  `}
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const CommentsForChoiceBtn = styled(Button)<{
  readonly $hasMargin: boolean;
}>`
  margin-right: 0.5rem;
  height: 40px;
  padding: 0 1rem;
  background-color: ${StyleEnums.gray5} !important;
  border-radius: 0.75rem;
  border: none;
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.45px;
  margin: ${ifProp("$hasMargin", "1.25rem 0 0 1.25rem", 0)};
  ${FlexBoxEnum.CenterHorizontal}

  &:hover {
    color: ${StyleEnums.black} !important;
  }
`;

export const VotesCount = styled.p`
  margin-right: 1.781rem;
  white-space: nowrap;
  color: ${StyleEnums.black};
  font-size: 0.938rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: -0.45px;
`;
