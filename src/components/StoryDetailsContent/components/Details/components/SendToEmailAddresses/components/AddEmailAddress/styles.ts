import styled from "styled-components";
import { Form, Button, Space } from "antd";
import { FlexBoxEnum } from "@/enums";

export const AddingWrapper = styled(Form)`
  width: 100%;
  margin-bottom: 1rem;
  ${FlexBoxEnum.AlignStartVertical}
`;

export const SubmitButton = styled(Button)`
  padding: 0.625rem 1.25rem;
  height: 2.5rem;
  font-size: 0.938rem;
  line-height: 20px;
`;

export const FormItem = styled(Form.Item)`
  ${FlexBoxEnum.CenterVertical}
  width: 100%;
  margin: 0;

  .ant-form-item-row {
    width: 100%;
  }
`;

export const FormSpace = styled(Space)`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  & div:nth-of-type(1) {
    width: 100%;
  }
`;
