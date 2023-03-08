import styled from "styled-components";
import { Button } from "antd";
import { StyleEnums } from "@/enums";
import { motion } from "framer-motion";

export const AnimationWrapper = styled(motion.div)`
  margin-bottom: 1rem;
  max-width: 70%;
  overflow: hidden;

  span {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResponsePreviewButton = styled(Button)`
  padding: 0.72rem 1.5rem;
  background: ${StyleEnums.white};
  border-radius: 5rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.02em;
  width: 100%;
`;
