import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const DetailsWrapper = styled(motion.div)`
  ${FlexBoxEnum.StartCenterVertical}
  width: 100%;
  height: 100%;
  background: ${StyleEnums.white};
  border: 1px solid ${StyleEnums.gray4};
  border-radius: 1.5rem;
  padding: 2.25rem;
  position: relative;
  box-shadow: 0 17px 40px rgba(74, 68, 143, 0.06);
`;
