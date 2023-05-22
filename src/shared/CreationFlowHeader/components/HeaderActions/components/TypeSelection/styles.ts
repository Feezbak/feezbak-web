import styled from "styled-components";
import { Button, Modal } from "antd";
import { FlexBoxEnum } from "@/enums";

export const TypeSelectionBtn = styled(Button)`
  width: 14.438rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const TypeModal = styled(Modal)`
  width: max-content !important;
  max-width: unset !important;
`;
