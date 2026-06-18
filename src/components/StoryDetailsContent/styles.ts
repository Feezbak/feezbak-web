import styled from "styled-components";
import { Col, Skeleton } from "antd";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const StoryDetailsContentWrapper = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
  flex: 1;
  height: 100%;
  padding: 2.25rem 0 2.375rem 0;
`;

export const DetailsSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;

export const LogoContainer = styled.div`
  margin-bottom: 2rem;
`;

export const ShareNudgeBar = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${StyleEnums.primary}14,
    ${StyleEnums.primary}08
  );
  border: 1px solid ${StyleEnums.primary}30;
  border-radius: 0.75rem;
  padding: 0.875rem 1.25rem;
  margin-bottom: 1.25rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  p {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${StyleEnums.black};
    margin: 0;
  }

  div {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
  }
`;
