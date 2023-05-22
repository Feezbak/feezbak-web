import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const NavMenuWrapper = styled.div`
  ${FlexBoxEnum.SpaceBetweenHorizontal}
  height: 4rem;
  padding: 0 0.75rem;
  border-radius: 50rem;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 2.5rem;
  z-index: 1;
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 0 2rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  margin: 8px;
  color: ${StyleEnums.gray1};
`;
