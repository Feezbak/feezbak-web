import styled from "styled-components";
import { Button } from "antd";
import { motion } from "framer-motion";
import { StyleEnums } from "@/enums";

export const ResponseBtnList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const AddNewRespBtn = styled(Button)`
  width: 100%;
  font-size: 0.85rem;
  padding: 0 0.75rem;
  height: 2.5rem;
  margin-top: 1rem;
  background: ${StyleEnums.black};
`;

export const ResponseListAndBtnContainer = styled(motion.div)`
  width: 45%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
