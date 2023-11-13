import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { BreakpointEnums } from "@/enums";

export const UploadProfileAvatarWrapper = styled.div`
  margin-bottom: 1.75rem;
  width: min-content;

  ${inLessThan(BreakpointEnums.mobile)`
    width: 100%;
 `};
`;
