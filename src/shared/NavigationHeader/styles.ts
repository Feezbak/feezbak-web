import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const NavigationHeaderWrapper = styled.div`
  width: 100%;
  padding: 3rem 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${StyleEnums.gray5};
`;

export const UserContainer = styled.div``;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
