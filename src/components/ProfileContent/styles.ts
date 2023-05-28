import styled from "styled-components";
import { Col } from "antd";
import { FlexBoxEnum } from "@/enums";

export const ProfileContentWrapper = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenColumnStretch}
  flex: 1;
  height: 100%;
`;
