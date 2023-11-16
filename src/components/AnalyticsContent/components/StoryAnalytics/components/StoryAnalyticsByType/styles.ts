import styled from "styled-components";
import { motion } from "framer-motion";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, StyleEnums, BreakpointEnums } from "@/enums";

export const StoryFeedbackWrapper = styled(motion.div)`
  width: 100%;
  margin: 2.75rem 0;
  background: ${StyleEnums.white};
  border-radius: 1rem;
  border: 1px solid ${StyleEnums.gray4};
  padding: 2rem;
  box-shadow: 0px 3px 6px 0px rgba(246, 245, 255, 0.16);
  ${FlexBoxEnum.StartStartVertical}

  ${inLessThan(BreakpointEnums.mobile)`
    padding: 1rem;
  `}
`;

export const TitleText = styled.h3`
  font-size: 1.25rem;
  font-style: normal;
  line-height: 1.5rem;
  margin-bottom: 0.75rem;
`;

export const OverallCountText = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  margin-bottom: 2rem;
`;

export const StorySlidesContainer = styled.div`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;
