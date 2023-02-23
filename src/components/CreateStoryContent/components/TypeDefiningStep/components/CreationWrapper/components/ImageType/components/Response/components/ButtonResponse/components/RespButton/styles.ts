import styled from "styled-components";
import { Button, Input } from "antd";
import { motion } from "framer-motion";
import { StyleEnums } from "@/enums";

export const ResponseButtonWrapper = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  width: 100%;
  margin-bottom: 0.5rem;

  &:last-child {
    margin: 0;
  }
`;

export const DeleteRespBtn = styled(Button)`
  margin-left: 0.5rem;
`;

export const ResponseInput = styled(Input)`
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.75rem;
  &:focus {
    outline: none;
    border: 1px solid ${StyleEnums.gray3};
  }
  &:hover {
    outline: none;
    border: 1px solid ${StyleEnums.gray3};
  }
`;
