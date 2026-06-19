import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";
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
  width: 100% !important;
  margin-bottom: 0.45rem;
  border-radius: 0.75rem;

  span {
    height: 5.5rem !important;
  }
`;

export const UsageBanner = styled.div`
  width: 100%;
  background: ${StyleEnums.gray5};
  border-radius: 0.75rem;
  padding: 0.85rem 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const UsageBarTrack = styled.div`
  flex: 1;
  height: 6px;
  background: ${StyleEnums.gray4};
  border-radius: 99px;
  overflow: hidden;
`;

export const UsageBarFill = styled.div<{ $pct: number }>`
  height: 100%;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $pct }) =>
    $pct >= 100 ? StyleEnums.error : StyleEnums.primary};
  border-radius: 99px;
  transition: width 0.3s ease;
`;

export const UsageLabel = styled.span`
  font-size: 0.8rem;
  color: ${StyleEnums.gray2};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const UpgradeLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${StyleEnums.primary};
  text-decoration: underline;
  white-space: nowrap;
  flex-shrink: 0;
`;
