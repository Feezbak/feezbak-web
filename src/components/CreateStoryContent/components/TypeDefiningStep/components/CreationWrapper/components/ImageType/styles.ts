import styled from "styled-components";
import { motion } from "framer-motion";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const ImageTypeWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  ${FlexBoxEnum.StartStartVertical}
`;

export const ImageTypeTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 2.25rem;

  ${inLessThan(BreakpointEnums.mobile)`
     margin-bottom: 1rem;
  `}
`;

export const ImageUploadArea = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;
