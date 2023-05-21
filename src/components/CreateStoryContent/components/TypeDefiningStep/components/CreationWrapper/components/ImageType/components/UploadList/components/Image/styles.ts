import styled from "styled-components";
import { prop, ifProp } from "@/helpers";
import { Button } from "antd";
import { motion } from "framer-motion";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const ImageBackgroundWrapper = styled(motion.div)<{
  readonly $srcURL: string;
  readonly $isSelected: boolean;
}>`
  min-width: 11.875rem;
  height: 15.5rem;
  border-radius: 1.2rem;
  background: url(${prop("$srcURL")}) no-repeat center;
  background-size: cover;
  ${FlexBoxEnum.CenterHorizontal}
  margin-right: 1rem;
  border: ${ifProp(
    "$isSelected",
    "2.5px solid " + StyleEnums.storyDefaultColor2,
    "unset"
  )};

  &:last-child {
    margin: 0;
  }
`;

export const DeleteBtn = styled(Button)`
  width: 3rem;
  height: 3rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: none;
`;

export const DeleteBtnWrapper = styled(motion.div)`
  width: 3rem;
  height: 3rem;
`;
