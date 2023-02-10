import styled from "styled-components";
import { Col } from "antd";
import { StyleEnums } from "@/enums";
export const PreviewFlowWrapper = styled(Col)`
  padding: 4rem 0;
  height: 100%;
`;

export const PreviewFlow = styled.div`
  background: ${StyleEnums.storyDefaultColor};
  width: 100%;
  height: 100%;
  border-radius: 2.75rem;
  position: relative;
`;

export const PoweredByWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;

  p {
    margin-bottom: 0.25rem;
    color: white;
    font-weight: 600;
    font-size: 0.563rem;
    line-height: 0.75rem;
    text-align: center;
    letter-spacing: 0.25rem;
  }
`;
