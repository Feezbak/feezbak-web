import styled from "styled-components";
import { Link } from "react-router-dom";
import { inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";

export const NavigationHeaderWrapper = styled.div`
  width: 100%;
  padding: 3rem 0 0 0;
  border-bottom: 1px solid ${StyleEnums.gray5};
  position: sticky;
  top: 0;
  z-index: 3;
  background: ${StyleEnums.white};
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
    padding-top: 2rem;
   `};
`;

export const UserContainer = styled.div``;

export const NavigationContainer = styled.div`
  ${FlexBoxEnum.JustifyStartHorizontal}
`;

export const MobileMenuItem = styled(Link)`
  display: inline-block;
  text-align: center;
  width: 100%;
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
