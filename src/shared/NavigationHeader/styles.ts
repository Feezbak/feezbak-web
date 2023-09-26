import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const NavigationHeaderWrapper = styled.div`
  width: 100%;
  padding: 3rem 0 0 0;
  border-bottom: 1px solid ${StyleEnums.gray5};
  position: sticky;
  top: 0;
  z-index: 3;
  background: ${StyleEnums.white};
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const UserContainer = styled.div``;

export const NavigationContainer = styled.div`
  ${FlexBoxEnum.JustifyStartHorizontal}
`;

export const Logo = styled.img`
  width: 9rem;
`;
