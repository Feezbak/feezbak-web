import styled from "styled-components";
import { Row } from "antd";
import { FlexBoxEnum } from "@/enums";

export const ProfileRowWrapper = styled(Row)`
  height: 100%;
  width: 100%;
  margin-top: 3rem;
  ${FlexBoxEnum.SpaceBetweenStartVertical}
`;
