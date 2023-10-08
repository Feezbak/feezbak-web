import styled from "styled-components";
import { Col } from "antd";

export const ImageWrapper = styled(Col)`
  position: sticky;
  top: 0;
  height: 28rem;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 1.5rem;
  object-fit: cover;
`;
