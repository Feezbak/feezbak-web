import styled from "styled-components";
import { Avatar, Skeleton } from "antd";
import { StyleEnums } from "@/enums";

export const CreatorAvatar = styled(Avatar)`
  border: none;
`;

export const PlanBadge = styled.span<{ $isPro: boolean }>`
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: ${({ $isPro }) =>
    $isPro ? StyleEnums.primary : StyleEnums.gray4};
  color: ${({ $isPro }) => ($isPro ? StyleEnums.white : StyleEnums.gray2)};
  line-height: 1.4;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const AvatarSkeleton = styled(Skeleton.Avatar)`
  & > span {
    width: 3rem !important;
    height: 3rem !important;
  }
`;

export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${StyleEnums.gray4};
`;
