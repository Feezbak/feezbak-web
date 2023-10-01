import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const CommentTileWrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-bottom: 1px solid ${StyleEnums.gray4};
`;

export const UserInfoSection = styled.div`
  margin-bottom: 1.25rem;
  ${FlexBoxEnum.JustifyStartHorizontal}
`;

export const UserInfo = styled.div`
  ${FlexBoxEnum.StartStartVertical}
  margin-left: 0.75rem;
`;

export const Name = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.3px;
  margin-bottom: 0.25rem;
`;

export const SecondaryInfo = styled.p`
  color: ${StyleEnums.gray2};
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${StyleEnums.gray3};
  background-color: ${StyleEnums.primary};
`;

export const Comment = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.3px;
`;
