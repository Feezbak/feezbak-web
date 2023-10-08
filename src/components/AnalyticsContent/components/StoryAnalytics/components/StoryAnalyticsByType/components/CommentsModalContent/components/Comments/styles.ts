import styled from "styled-components";
import { Col } from "antd";
import { motion } from "framer-motion";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const CommentsWrapper = styled(Col)`
  background: ${StyleEnums.white};
`;

export const CommentsSkeletonWrapper = styled(motion.div)`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;

export const CommentsContainer = styled(motion.div)`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;
