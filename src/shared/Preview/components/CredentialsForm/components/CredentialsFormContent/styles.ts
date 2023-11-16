import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";
import { Form, Button } from "antd";

export const FormWrapper = styled(Form)`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
`;

export const SubmitBtn = styled(Button)`
  width: 100%;
  max-width: 23.25rem;
`;

export const FieldsWrapper = styled.div`
  width: 100%;
  ${FlexBoxEnum.StartCenterVertical}
`;
