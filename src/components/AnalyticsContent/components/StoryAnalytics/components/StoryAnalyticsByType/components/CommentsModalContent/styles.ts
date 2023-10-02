import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleEnums } from "@/enums";

export const ModalWrapper = styled(motion.div)`
  background: ${StyleEnums.white};
  padding: 1.5rem;
  border: 1px solid #f5f5f5;
  box-shadow: 0 17px 40px rgba(74, 68, 143, 0.06);
  border-radius: 1.25rem;
  width: 32rem;
`;
