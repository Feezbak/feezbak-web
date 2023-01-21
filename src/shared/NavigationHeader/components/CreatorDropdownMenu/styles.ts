import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { Avatar } from "antd";

export const CreatorAvatar = styled(Avatar)`
  background: ${StyleEnums.primary};
`;

export const CreatorMenuItem = styled.span`
  width: 5.5rem;
  padding: 0.45rem 0;
  display: inline-block;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 400;
  line-height: 1.5rem;
  color: ${StyleEnums.black};
`;
