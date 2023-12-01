import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";

export const FormItemWrapper = styled.div`
  ${FlexBoxEnum.SpaceBetweenHorizontal}
  padding: 0.75rem 1rem;
  border: 1px solid ${StyleEnums.gray4};
  border-radius: 0.75rem;
  width: 22.6rem;
  background: ${StyleEnums.white};

  ${inLessThan(BreakpointEnums.mobile)`
     width: 90%;
  `}
`;

export const Content = styled.div`
  width: 100%;
  ${FlexBoxEnum.JustifyStartHorizontal}
`;

export const FieldName = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
  letter-spacing: -0.02em;
  margin-left: 0.625rem;
  margin-top: 0.2rem;
  max-width: 80%;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
