import styled from "styled-components";
import { prop } from "@/helpers";
import { Button } from "antd";
import { motion } from "framer-motion";

export const ImageBackgroundWrapper = styled(motion.div)<{
  readonly $srcURL: string;
}>`
  min-width: 11.875rem;
  height: 15.5rem;
  border-radius: 1rem;
  background: url(${prop("$srcURL")}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

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
