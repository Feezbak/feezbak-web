import styled from "styled-components";
import { Col, Button } from "antd";
import { motion } from "framer-motion";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const CommentsWrapper = styled(Col)`
  background: ${StyleEnums.white};
`;

export const CommentsSkeletonWrapper = styled(motion.div)`
  width: 100%;
  max-height: 30rem;
  ${FlexBoxEnum.StartStartVertical}
`;

export const CommentsContainer = styled(motion.div)`
  width: 100%;
  overflow: auto;
  max-height: 30rem;
  ${FlexBoxEnum.StartStartVertical}
`;

export const CloseBtn = styled(Button)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${StyleEnums.gray4};
  z-index: 5;
  border: none;
  ${FlexBoxEnum.CenterVertical}
`;

export const CommentHeader = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const Heading = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: -0.48px;
`;
