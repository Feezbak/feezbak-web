import styled from "styled-components";
import { Row, Col } from "antd";

export const SignInMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInFormWrapper = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled(Col)`
  justify-content: center;
  align-items: center;
`;

export const Content = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title3 = styled.h3`
  font-size: 1.375rem;
  line-height: 2rem;
  font-weight: bolder;
  margin-bottom: 0;
`;
export const Title1 = styled.h1`
  font-size: 5rem;
  line-height: 2rem;
  font-weight: bolder;
  margin-bottom: 0;
`;
export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin-bottom: 0;
`;
