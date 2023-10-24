import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { motion } from "framer-motion";
import { Skeleton } from "antd";

export const StoriesListWrapper = styled(motion.ul)`
  list-style: none;
  padding: 0;
  width: 100%;
  ${FlexBoxEnum.CenterVertical}
`;

export const EmptyStoriesWrapper = styled(motion.div)`
  ${FlexBoxEnum.CenterVertical}
  margin-bottom: 2rem;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }
  p {
    ont-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    letter-spacing: -0.03em;
    display: inline-block;
    max-width: 33rem;
  }
`;

export const EmptyStoriesImage = styled.img`
  width: 15rem;
  margin-bottom: 1rem;
`;

export const SkeletonsWrapper = styled(motion.div)`
  width: 100%;
  margin-top: 0.75rem;
  ${FlexBoxEnum.CenterVertical}
`;

export const StorySkeleton = styled(Skeleton.Input)`
  margin-bottom: 0.45rem;
  border-radius: 0.75rem;

  span {
    height: 5.5rem !important;
  }
`;
