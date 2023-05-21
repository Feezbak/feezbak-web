import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const ResponseWrapper = styled(motion.div)`
  width: 100%;
  margin: 1.5rem 0 1.5rem 0;
`;

export const ResponseTitleAndActions = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.02em;
  }
`;

export const ResponseTypesWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
`;
