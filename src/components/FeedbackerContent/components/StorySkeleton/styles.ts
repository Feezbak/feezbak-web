import styled from "styled-components";
import { BreakpointEnums } from "@/enums";
import { inLessThan } from "@/helpers";
import { Skeleton } from "antd";
import { motion } from "framer-motion";

export const SkeletonInput = styled(Skeleton.Input)`
  width: 100% !important;
  height: 100% !important;

  span {
    border-radius: 2rem !important;

    ${inLessThan(BreakpointEnums.mobile)`
     border-radius: unset !important;
  `}
  }
`;

export const SkeletonWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
