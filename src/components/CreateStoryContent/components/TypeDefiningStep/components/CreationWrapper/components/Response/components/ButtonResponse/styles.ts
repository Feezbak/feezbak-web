import styled from "styled-components";
import { Button } from "antd";
import { motion } from "framer-motion";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

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
  margin-top: 1rem;
`;

export const ResponseListAndBtnContainer = styled(motion.div)`
  width: 45%;
  ${FlexBoxEnum.StartStartVertical}

  ${inLessThan(BreakpointEnums.mobile)`
      width: 100%;
  `}
`;
