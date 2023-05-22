import styled from "styled-components";
import { Row, Col } from "antd";
import { FlexBoxEnum } from "@/enums";

export const SignInMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const SignInFormWrapper = styled(Row)`
  width: 100%;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const ImageContainer = styled(Col)`
  justify-content: center;
  align-items: center;
`;

export const Content = styled(Col)`
  ${FlexBoxEnum.CenterVertical}
  padding: 1rem 1.5rem;
`;

export const TitleWrapper = styled.div`
  ${FlexBoxEnum.StartStartVertical}
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin-bottom: 0;
`;
