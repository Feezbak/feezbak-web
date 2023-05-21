import styled from "styled-components";
import { Col } from "antd";
import { FlexBoxEnum } from "@/enums";

export const CreationFlowWrapper = styled(Col)`
  padding: 4rem 4rem 4rem 0;
  height: 100%;
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
`;
