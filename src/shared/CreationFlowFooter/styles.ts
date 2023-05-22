import styled, { css } from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { Button } from "antd";

export const CreationFlowFooterWrapper = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid ${StyleEnums.gray4};
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const StepsText = styled.span`
  width: 20rem;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: right;
  color: ${StyleEnums.gray3};
`;

export const StepsControlWrapper = styled.div`
  ${FlexBoxEnum.SpaceBetweenHorizontal}
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

  &.ant-btn-primary {
    font-weight: 600;
    svg > g > path {
      fill: ${StyleEnums.white};
    }
  }
`;
export const StepControlPrevBtn = styled(Button)`
  ${stepBtnStyles};
  margin-right: 0.35rem;
  padding-left: 0;

  svg {
    transform: rotateZ(180deg);
  }
`;
