import styled from "styled-components";
import { Button, Modal } from "antd";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const TypeSelectionBtn = styled(Button)`
  width: 14.438rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
  ${inLessThan(BreakpointEnums.mobile)`
     width: auto;
  `}
`;

export const TypeModal = styled(Modal)`
  width: max-content !important;
  max-width: unset !important;
`;
