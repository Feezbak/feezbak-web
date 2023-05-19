import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleEnums } from "@/enums";
import { Button } from "antd";

export const ItemWrapper = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
  margin-bottom: 0.625rem;
  background: ${StyleEnums.gray5};
  border-radius: 0.75rem;
`;

export const EmailSpan = styled.span`
  max-width: 50%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 1rem;
`;

export const DeleteEmailBtn = styled(Button)`
  width: 1.25rem !important;
  height: 1.25rem;
  padding: 0;
  border-radius: 50%;
  background: transparent;
  margin-right: 1rem;
  border: none;
  outline: none;
`;
