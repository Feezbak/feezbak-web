import styled from "styled-components";
import { prop, ifProp } from "@/helpers";
import { Button } from "antd";
import { motion } from "framer-motion";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const ImageBackgroundWrapper = styled(motion.div)<{
  readonly $srcURL: string;
  readonly $isSelected: boolean;
}>`
  cursor: grabbing;
  border-radius: 1.2rem;
  background: url(${prop("$srcURL")}) no-repeat center;
  background-size: cover;
  border: ${ifProp(
    "$isSelected",
    "2.5px solid " + StyleEnums.storyDefaultColor2,
    "unset"
  )};

  &:last-child {
    margin: 0;
  }

  & > div {
    ${FlexBoxEnum.CenterHorizontal}
  }
`;

export const DeleteBtn = styled(Button)`
  width: 3rem !important;
  height: 3rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;
  ${FlexBoxEnum.CenterVertical}
`;

export const DeleteBtnWrapper = styled(motion.div)`
  width: 3rem;
  height: 3rem;
`;
