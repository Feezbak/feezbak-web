import styled from "styled-components";
import { motion } from "framer-motion";

export const TextTypeWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h3 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: center;
    letter-spacing: -0.01em;
    padding: 0 20%;
  }
`;

export const TextTypeImage = styled.img`
  width: 15rem;
  margin-bottom: 2rem;
`;
