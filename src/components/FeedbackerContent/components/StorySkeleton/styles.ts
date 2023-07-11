import styled from "styled-components";
import { Skeleton } from "antd";
import { motion } from "framer-motion";

export const SkeletonInput = styled(Skeleton.Input)`
  width: 100% !important;
  height: 100% !important;

  span {
    border-radius: 2rem !important;
  }
`;

export const SkeletonWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
