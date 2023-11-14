import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { Form, Button } from "antd";

export const ForgotPasswordFormWrapper = styled(Form)`
  margin-top: 3rem;
  width: 100%;
  ${FlexBoxEnum.CenterVertical}
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  max-width: 23.25rem;
  ${FlexBoxEnum.AlignStartVertical}
`;
