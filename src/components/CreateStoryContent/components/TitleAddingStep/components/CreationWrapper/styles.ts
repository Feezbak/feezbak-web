import styled, { css } from "styled-components";
import { Col, Button } from "antd";
import { StyleEnums } from "@/enums";

export const CreationFlowWrapper = styled(Col)`
  padding: 4rem 4rem 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const CreationFlowHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h3 {
    font-weight: 800;
    font-size: 1.5rem;
    letter-spacing: -0.02em;
  }
`;

export const CreationFlowFooter = styled.div`
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
  width: 3rem !important;
  height: 3rem;
  padding: 0;
  border: none;
`;

export const StepControlNextBtn = styled(Button)`
  ${stepBtnStyles}
`;
export const StepControlPrevBtn = styled(Button)`
  transform: rotate(180deg);
  margin-right: 0.35rem;
  ${stepBtnStyles}
`;

export const BackBtn = styled(Button)`
  margin-right: 0.75rem;
  padding: 0;
  width: 2.5rem !important;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
`;
