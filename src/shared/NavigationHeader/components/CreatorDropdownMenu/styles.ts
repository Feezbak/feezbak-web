import styled from "styled-components";
import { Avatar, Skeleton } from "antd";
import { StyleEnums } from "@/enums";

export const CreatorAvatar = styled(Avatar)`
  border: none;
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
