import styled from "styled-components";
import { prop } from "@/helpers";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const CreatedByWrapper = styled.div<{ readonly $margins: string }>`
  width: 100%;
  z-index: 5;
  margin: ${prop("$margins")};
  ${FlexBoxEnum.CenterHorizontal}
`;

export const CreatedByText = styled.p<{ readonly $color: StyleEnums }>`
  color: ${prop("$color")};
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-right: 0.25rem;
`;
