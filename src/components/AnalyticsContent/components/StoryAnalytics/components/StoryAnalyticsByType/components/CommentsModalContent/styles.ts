import styled from "styled-components";
import { motion } from "framer-motion";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { Row } from "antd";

export const ModalWrapper = styled(motion.div)`
  background: ${StyleEnums.white};
  padding: 1.5rem;
  border: 1px solid #f5f5f5;
  box-shadow: 0 17px 40px rgba(74, 68, 143, 0.06);
  border-radius: 1.25rem;
  width: 65%;
  max-height: 80dvh;
  overflow-y: auto;
  position: relative;
`;

export const ContentWrapper = styled(Row)`
  width: 100%;
  flex-wrap: wrap;
  ${FlexBoxEnum.SpaceBetweenStartVertical}
`;

export const FixedWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: -1.5rem;
  padding: 0.5rem 0;
  background: ${StyleEnums.white};
`;
