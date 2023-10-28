import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { Row } from "antd";

export const ListHeaderWrapper = styled(Row)`
  width: 100%;
  background: ${StyleEnums.gray5};
  padding: 0.625rem 2rem;
  border-radius: 0.625rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.3px;
  }
`;

export const HeaderStatusAndActions = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;
