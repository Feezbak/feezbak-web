import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { Row, Col, Button } from "antd";

export const ModalWrapper = styled(motion.div)`
  background: ${StyleEnums.white};
  padding: 1.5rem;
  border: 1px solid #f5f5f5;
  box-shadow: 0 17px 40px rgba(74, 68, 143, 0.06);
  border-radius: 1.25rem;
  width: 30rem;
`;

export const ModalContent = styled(Row)`
  width: 100%;
`;

export const ImgWrapper = styled(Col)``;
export const ActionsAndTextWrapper = styled(Col)`
  h4 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const Img = styled.img`
  width: 8.438rem;
  height: 11.25rem;
`;

export const Actions = styled.div`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const ActionBtn = styled(Button)`
  width: 7.875rem;
`;
