import styled from "styled-components";
import { motion } from "framer-motion";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

export const InfoFormWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.StartStartVertical}

  ul {
    height: 100%;
    max-height: 16.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    list-style: none;
    ${inLessThan(BreakpointEnums.mobile)`
         width: 100%;
         max-height: 15rem;
     `}
  }
  li {
    margin-bottom: 0.75rem;
  }
`;

export const FieldsTitle = styled.h4`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;
