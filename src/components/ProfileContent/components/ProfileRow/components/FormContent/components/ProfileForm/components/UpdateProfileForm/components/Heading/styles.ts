import styled from "styled-components";
import { Button } from "antd";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, StyleEnums, BreakpointEnums } from "@/enums";

export const FormHeadingWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.75rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
    margin: 2rem 0;
   `};
`;

export const DescriptionContainer = styled.div`
  ${FlexBoxEnum.StartStartVertical}

  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.02em;
    color: ${StyleEnums.gray3};
  }
`;

export const SubmitBtn = styled(Button)`
  font-size: 1rem;
  line-height: 1.25rem;
`;
