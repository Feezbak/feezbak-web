import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";

export const List = styled.ul`
  max-height: 8rem;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  ${FlexBoxEnum.StartStartVertical}
`;
