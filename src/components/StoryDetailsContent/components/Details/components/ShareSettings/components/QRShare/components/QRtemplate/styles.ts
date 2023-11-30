import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { prop } from "@/helpers";

export const TemplateWrapper = styled.div<{
  readonly $background: string;
}>`
  ${FlexBoxEnum.CenterVertical}
  padding: 6.25rem 3.125rem 3.75rem 3.125rem;
  background: ${prop("$background")};
`;

export const Title = styled.p<{
  readonly $color: StyleEnums;
}>`
  font-family: ${StyleEnums.fontFamilyExtraBold};
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 2.75rem;
  letter-spacing: -0.8px;
  color: ${prop("$color")};
  margin-bottom: 3.5rem;
  text-align: center;
  display: inline-block;
  max-width: 19.25rem;
  word-break: break-word;
`;

export const QRcontainer = styled.div`
  ${FlexBoxEnum.CenterVertical}
  border-radius: 1.5rem;
  padding: 1.5rem;
  background: ${StyleEnums.white};
  margin-bottom: 5.25rem;
`;

export const PoweredBy = styled.div<{
  readonly $color: StyleEnums;
}>`
  ${FlexBoxEnum.CenterVertical}

  p {
    margin: 1.3rem 0 0.45rem 0;
    color: ${prop("$color")};
    font-size: 0.875rem;
    line-height: 0.75rem;
    letter-spacing: 4px;
  }
`;
