import styled from "styled-components";
import { Button } from "antd";
import { motion } from "framer-motion";
import { inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";

export const ResponseBtnList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
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
  ${FlexBoxEnum.StartStartVertical}

  ${inLessThan(BreakpointEnums.mobile)`
      width: 100%;
  `}
`;
