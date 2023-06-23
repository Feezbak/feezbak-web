import styled from "styled-components";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const ForgotPasswordMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const ForgotPasswordFormWrapper = styled(Row)`
  width: 100%;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const ImageContainer = styled(Col)`
  justify-content: center;
  align-items: center;

  img {
    width: 32.75rem;
  }
`;

export const Content = styled(Col)`
  padding: 1rem 1.5rem;
  ${FlexBoxEnum.CenterVertical}
`;

export const TitleWrapper = styled.div`
  ${FlexBoxEnum.StartStartVertical}
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin-bottom: 0;
  max-width: 23rem;
`;

export const Title3 = styled.h3`
  font-size: 1.375rem;
  line-height: 2rem;
  font-weight: bolder;
  margin-bottom: 0;
`;

export const AnimatedWrapper = styled(motion.div)`
  width: 100%;
`;
