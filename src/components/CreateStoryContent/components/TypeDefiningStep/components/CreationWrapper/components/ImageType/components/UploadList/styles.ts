import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";

export const UploadListWrapper = styled.ul`
  width: 100%;
  ${FlexBoxEnum.JustifyStartHorizontal}
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
  overflow-y: hidden;
  cursor: grabbing;
`;
