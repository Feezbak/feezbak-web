import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const FeedbackerContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${StyleEnums.storyDefaultColor1};
  ${FlexBoxEnum.StartCenterVertical}
`;

export const PreviewFlowWrapper = styled.div`
  margin-top: -3rem;
`;
