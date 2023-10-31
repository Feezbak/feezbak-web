import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";
import { inLessThan } from "@/helpers";
import { Button } from "antd";

export const QRShareWrapper = styled(motion.div)`
  width: 100%;
  min-height: 8.5rem;
  ${FlexBoxEnum.CenterVertical}

  ${inLessThan(BreakpointEnums.mobile)`
    min-height: unset;
   `};
`;

export const ExportWrapper = styled.div`
  display: none;
  border-radius: 1.5rem;
`;

export const ExportPNGButton = styled(Button)`
  margin-top: 1rem;
`;
