import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { Form, Button, Input } from "antd";

export const FormWrapper = styled(Form)`
  margin-top: 3rem;
  width: 100%;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  ${FlexBoxEnum.StartCenterVertical}
`;

export const SubmitBtn = styled(Button)`
  width: 100%;
  max-width: 23.25rem;
`;

export const FormItem = styled(Form.Item)`
  max-width: 23.25rem;
  width: 100%;
  ${FlexBoxEnum.CenterVertical}

  .ant-form-item-row {
    width: 100%;
  }

  label {
    display: block;
    color: ${StyleEnums.gray1};
    margin-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    sub {
      font-size: 1.5rem;
      color: ${StyleEnums.error};
    }
  }
`;

export const CustomisedInput = styled(Input)`
  height: 2.75rem;
`;
