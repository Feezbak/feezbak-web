import styled from "styled-components";
import { Form, Button, Space } from "antd";

export const AddingWrapper = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

export const SubmitButton = styled(Button)`
  padding: 0.625rem 1.25rem;
  height: 2.5rem;
  font-size: 0.938rem;
  line-height: 20px;
`;

export const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;

  .ant-form-item-row {
    width: 100%;
  }
`;

export const FormSpace = styled(Space)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div:nth-of-type(1) {
    width: 100%;
  }
`;
