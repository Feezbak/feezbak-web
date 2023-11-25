import styled from "styled-components";
import { Space } from "antd";
import { inLessThan, ifProp } from "@/helpers";
import { FlexBoxEnum, StyleEnums, BreakpointEnums } from "@/enums";

export const CommentTileWrapper = styled.div<{
  readonly $hasHorizontalPadding: boolean;
}>`
  width: 100%;
  padding: 1rem ${ifProp("$hasHorizontalPadding", "1.5rem", "0")};
  border-bottom: 1px solid ${StyleEnums.gray4};

  ${inLessThan(BreakpointEnums.mobile)`
     padding: 0 0 1.5rem 0;
  `}
`;

export const UserInfoSection = styled.div`
  ${FlexBoxEnum.StartStartVertical}
`;

export const UserInfo = styled.div`
  ${FlexBoxEnum.StartStartVertical}
  margin-top: 0.75rem;
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
  font-size: 0.938rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.3px;
`;

export const Contacts = styled(Space)`
  margin: 0.75rem 0;
  font-size: 0.75rem;
  color: ${StyleEnums.gray2};
`;

export const ContactBlock = styled.div`
  background: ${StyleEnums.gray5};
  padding: 0.375rem 0.5rem;
  border-radius: 0.375rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  p {
    color: ${StyleEnums.black};
    font-size: 0.938rem;
    line-height: 1.25rem;
    letter-spacing: -0.3px;
    margin-left: 0.25rem;
  }
`;
