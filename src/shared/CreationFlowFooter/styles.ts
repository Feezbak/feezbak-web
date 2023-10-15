import styled, { css } from "styled-components";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";
import { Button, Tooltip } from "antd";
import { inLessThan } from "@/helpers";

export const CreationFlowFooterWrapper = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid ${StyleEnums.gray4};
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
    flex-direction: column;
     padding-top: 1rem;
  `}
`;

export const StepsText = styled.span`
  width: 20rem;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: left;
  color: ${StyleEnums.gray3};

  ${inLessThan(BreakpointEnums.mobile)`
     text-align: center;
     margin-top: 0.75rem;
  `}
`;

export const StepsControlWrapper = styled.div`
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
      width: 100%;
  `}
`;

const stepBtnStyles = css`
  height: 3rem;
  padding-top: 0;
  padding-bottom: 0;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const StepControlNextBtn = styled(Button)`
  ${stepBtnStyles};
  padding-right: 0;
  transition: 0.3s;

  ${inLessThan(BreakpointEnums.mobile)`
     width: 100%;
  `}

  svg {
    margin: 0.75rem;
  }

  &.ant-btn-primary {
    font-weight: 600;
    svg > path {
      fill: ${StyleEnums.white};
    }
  }
`;
export const StepControlPrevBtn = styled(Button)`
  ${stepBtnStyles};
  margin-right: 0.35rem;
  padding-left: 0;

  ${inLessThan(BreakpointEnums.mobile)`
     flex: 1;
  `}

  svg {
    margin: 0.75rem;
    transform: rotateZ(180deg);
  }
`;

export const NextBtnTooltip = styled(Tooltip)`
  ${inLessThan(BreakpointEnums.mobile)`
     flex: 1;
  `}
`;
