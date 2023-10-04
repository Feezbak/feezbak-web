import styled from "styled-components";
import { Row, Col } from "antd";
import { FlexBoxEnum } from "@/enums";

export const StoriesWrapper = styled(Row)`
  height: 100%;
`;

export const StoriesListHeader = styled.div`
  width: 100%;
  margin: 0 0 2.25rem 0;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  h3 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin: 0;
  }
`;

export const StoriesContent = styled(Col)`
  margin: 2.25rem 0 4rem 0;
  height: max-content;
  width: 100%;
`;
