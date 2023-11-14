import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { motion } from "framer-motion";
import { Form, Button } from "antd";

export const ChangePasswordFormWrapper = styled(Form)`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;

export const FormContainer = styled(motion.div)`
  width: 100%;
  ${FlexBoxEnum.AlignStartVertical}
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  max-width: 23.25rem;
  ${FlexBoxEnum.AlignStartVertical}
`;
