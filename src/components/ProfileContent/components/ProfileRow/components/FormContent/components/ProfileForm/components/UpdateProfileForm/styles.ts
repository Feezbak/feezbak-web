import styled from "styled-components";
import { Form, Space } from "antd";
import { inLessThan } from "@/helpers";
import { FlexBoxEnum, BreakpointEnums } from "@/enums";

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
