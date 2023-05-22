import styled from "styled-components";
import { Space } from "antd";
import { FlexBoxEnum } from "@/enums";

export const HeaderActionsWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.JustifyEndHorizontal}
`;

export const SpaceWrapper = styled(Space)`
  justify-content: flex-end;
`;
