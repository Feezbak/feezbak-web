import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { Form, Button, Input } from "antd";

export const FormWrapper = styled(Form)`
  margin-top: 3rem;
  width: 100%;
`;

export const SubmitBtn = styled(Button)`
  width: 100%;
`;

export const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 23.25rem;
  width: 100%;

  .ant-form-item-row {
    width: 100%;
  }

  label {
    display: block;
    color: ${StyleEnums.gray1};
    margin-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.25rem;

    sub {
      font-size: 1.5rem;
      color: ${StyleEnums.error};
    }
  }
`;

export const CustomisedInput = styled(Input)`
  height: 2.75rem;
`;
