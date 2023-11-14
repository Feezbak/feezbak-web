import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { Form, Button } from "antd";

export const SignUpFormWrapper = styled(Form)`
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
  ${FlexBoxEnum.JustifyStartVertical}
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin: 1rem 0 0 0;

  a {
    color: ${StyleEnums.primary};
  }
`;
