import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum } from "@/enums";

export const ErrorBounderyWrapper = styled(motion.div)`
  ${FlexBoxEnum.CenterVertical}
`;

export const Title = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 2.25rem;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
`;

export const AppCrashIllustration = styled.img`
  width: 20rem;
  margin-bottom: 2rem;
`;

export const ErrorWrapper = styled.div`
  width: 100%;
  padding: 0 2rem;
`;
