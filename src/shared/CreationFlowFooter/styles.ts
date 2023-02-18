import styled, { css } from "styled-components";
import { StyleEnums } from "@/enums";
import { Button } from "antd";

export const CreationFlowFooterWrapper = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${StyleEnums.gray4};
`;

export const StepsText = styled.span`
  width: 20rem;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: right;
  color: ${StyleEnums.gray3};
`;

export const StepsControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const stepBtnStyles = css`
  height: 3rem;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepControlNextBtn = styled(Button)`
  ${stepBtnStyles};
  padding-right: 0;

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
