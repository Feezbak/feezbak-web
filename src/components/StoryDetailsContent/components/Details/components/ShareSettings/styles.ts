import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";

export const ShareSettingsWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const ShareSettingsTitle = styled.h3`
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
`;
