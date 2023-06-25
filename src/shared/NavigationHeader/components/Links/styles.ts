import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { NavLink } from "react-router-dom";

export const LinksWrapper = styled.ul`
  margin: 0 0 0 3.75rem;
  list-style: none;
  padding: 0;
  ${FlexBoxEnum.JustifyStartHorizontal}
`;

export const LinkItem = styled(NavLink)`
  padding: 1.25rem 0.625rem;
  color: ${StyleEnums.black};
  font-size: 1rem;
  line-height: 1.5rem;
  width: 100%;
  height: 100%;
  display: inline-block;
  border-bottom: 2px solid transparent;
  white-space: nowrap;

  &.active {
    border-bottom: 2px solid ${StyleEnums.primary};
  }

  &:hover {
    color: ${StyleEnums.primary};
  }
`;
