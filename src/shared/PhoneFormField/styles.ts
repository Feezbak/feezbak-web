import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";
import { Form, Input } from "antd";

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

export const PhoneInput = styled(Input)`
  height: 2.75rem;
`;
