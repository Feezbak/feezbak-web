import styled from "styled-components";
import { Col, Skeleton } from "antd";
import { FlexBoxEnum } from "@/enums";

export const StoryDetailsContentWrapper = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
  flex: 1;
  height: 100%;
  padding: 4.625rem 0 2.375rem 0;
`;

export const DetailsSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
