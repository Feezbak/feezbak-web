import styled from "styled-components";
import { Form, Button, Input } from "antd";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const SignInFormWrapper = styled(Form)`
  margin-top: 3rem;
  width: 100%;
  ${FlexBoxEnum.CenterVertical}
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

    sub {
      font-size: 1.5rem;
      color: ${StyleEnums.error};
    }
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const CustomisedInput = styled(Input)`
  height: 3rem;
`;

export const PasswordInput = styled(Input.Password)`
  height: 3rem;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  max-width: 23.25rem;
  ${FlexBoxEnum.AlignStartVertical}
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin: 1rem 0 0 0;

  a {
    color: ${StyleEnums.primary};
  }
`;
