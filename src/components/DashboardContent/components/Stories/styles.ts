import styled from "styled-components";
import { Row, Col } from "antd";

export const StoriesWrapper = styled(Row)`
  height: 100%;
`;

export const StoriesListHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2.25rem 0;

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin: 0;
  }
`;

export const StoriesContent = styled(Col)`
  margin-top: 2.25rem;
  height: max-content;
  width: 100%;
`;
