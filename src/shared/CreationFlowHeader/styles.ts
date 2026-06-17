import styled from "styled-components";
import { Button } from "antd";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums, StyleEnums } from "@/enums";

export const CreationFlowHeaderWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
  gap: 0.75rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
     flex-direction: column;
  `}
`;

export const GoBackContentWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.JustifyStartHorizontal}

  h3 {
    font-weight: 800;
    font-size: 1.5rem;
    letter-spacing: -0.02em;
  }
`;

export const StepProgressWrapper = styled.div`
  ${FlexBoxEnum.CenterHorizontal}
  gap: 0.5rem;
`;

export const StepDot = styled.div<{
  $isActive: boolean;
  $isCompleted: boolean;
}>`
  flex-shrink: 0;
  width: ${({ $isActive }) => ($isActive ? "1.5rem" : "0.5rem")};
  height: 0.5rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  box-shadow: none;
  transition: width 0.25s ease, background-color 0.25s ease;
  background-color: ${({ $isActive, $isCompleted }) =>
    $isActive || $isCompleted ? StyleEnums.primary : StyleEnums.gray3};
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.5 : 1)};
`;

export const StepLabel = styled.span`
  font-size: 0.8rem;
  color: ${StyleEnums.gray2};
  font-weight: 500;
  white-space: nowrap;
  margin-left: 0.25rem;
`;

export const BackBtn = styled(Button)`
  margin-right: 0.75rem;
  padding: 0;
  width: 2.5rem !important;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
`;

export const DemoBtn = styled(Button)`
  margin-left: auto;
  border-radius: 50%;
  outline: none;
`;
