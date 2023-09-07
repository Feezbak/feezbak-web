import styled from "styled-components";
import { Row, Col } from "antd";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const ImageResponseContainer = styled(Row)`
  width: 100%;
  padding: 2rem 0;
  border-bottom: 1px solid ${StyleEnums.gray4};
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  &:last-child {
    border: none;
  }
`;

export const ImageCol = styled(Col)`
  max-height: 15rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
  max-height: 15rem;
`;
