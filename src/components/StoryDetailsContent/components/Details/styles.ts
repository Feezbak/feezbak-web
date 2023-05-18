import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleEnums } from "@/enums";

export const DetailsWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${StyleEnums.white};
  border: 1px solid ${StyleEnums.gray4};
  border-radius: 1.5rem;
  padding: 2.25rem;
  box-shadow: 0 17px 40px rgba(74, 68, 143, 0.06);
`;
