import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleEnums } from "@/enums";
import { Button } from "antd";

export const ItemWrapper = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  gap: 0.625rem;
  background: ${StyleEnums.gray5};
  border-radius: 0.75rem;
`;

export const EmailSpan = styled.span`
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DeleteEmailBtn = styled(Button)`
  border-radius: 50%;
`;
