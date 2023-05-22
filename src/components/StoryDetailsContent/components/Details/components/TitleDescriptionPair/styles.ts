import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const TextPairWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
  ${FlexBoxEnum.StartStartVertical}
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.25rem;
`;

export const SecondaryText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.01em;
  color: ${StyleEnums.gray3};
`;
