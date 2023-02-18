import styled from "styled-components";
import { Button } from "antd";

export const CreationFlowHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GoBackContentWrapper = styled.div`
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

export const BackBtn = styled(Button)`
  margin-right: 0.75rem;
  padding: 0;
  width: 2.5rem !important;
  height: 2.5rem;
  border-radius: 50%;
  border: 0;
`;
