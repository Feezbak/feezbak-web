import styled from "styled-components";
import { Form, Space } from "antd";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, StyleEnums, BreakpointEnums } from "@/enums";

export const UpdateForm = styled(Form)`
  width: 100%;
`;

export const FieldsSection = styled(Space)`
  width: 100%;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  .ant-space-item {
    width: 100%;
  }

  ${inLessThan(BreakpointEnums.mobile)`
    row-gap: 0;
    flex-wrap: wrap;
   `};
`;

export const FormItem = styled(Form.Item)`
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

    sub {
      font-size: 1.5rem;
      color: ${StyleEnums.error};
    }
  }
`;
