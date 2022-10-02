import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { motion } from "framer-motion";

export const CardBody = styled(motion.div)`
  flex: 0.32;
  background: ${StyleEnums.gray5};
  border-radius: 1.5rem;
  padding: 2rem;
  transition: 0.3s;
  height: 100%;

  img {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 0 1rem ${StyleEnums.primary};
    background: ${StyleEnums.primary};
    h4,
    p {
      color: white !important;
    }
  }
`;

export const CardContent = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  h4 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 0;
    font-size: 0.938rem;
    line-height: 1.5rem;
  }
`;
