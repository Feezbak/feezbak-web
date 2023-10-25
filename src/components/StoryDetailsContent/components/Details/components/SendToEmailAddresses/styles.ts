import styled from "styled-components";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";
import { inLessThan } from "@/helpers";

export const SendEmailAddressesWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.StartStartVertical}

  ${inLessThan(BreakpointEnums.mobile)`
    margin-top: 1rem;
   `};
`;
