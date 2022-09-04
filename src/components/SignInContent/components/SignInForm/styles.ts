import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { Form, Button } from "antd";

export const SignInFormWrapper = styled(Form)`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 23.25rem;
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin: 1rem 0 0 0;
`;
