import styled from "styled-components";
import { Form } from "antd";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const FormItem = styled(Form.Item)`
  width: 100%;
  ${FlexBoxEnum.CenterVertical}

  .ant-form-item-row {
    max-width: 23.25rem;
    width: 100%;
  }

  .ant-select {
    height: unset;
  }

  label {
    display: block;
    color: ${StyleEnums.gray1};
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;

    sub {
      font-size: 1.5rem;
      color: ${StyleEnums.error};
    }
  }
`;
