import styled from "styled-components";
import { Form, Button } from "antd";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const SignInFormWrapper = styled(Form)`
  margin-top: 3rem;
  width: 100%;
  ${FlexBoxEnum.CenterVertical}
`;

export const SubmitButton = styled(Button)`
  width: 100%;
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

export const Divider = styled.div`
  width: 100%;
  max-width: 23.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0 0;
  color: #aaa;
  font-size: 0.875rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e8e8e8;
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  max-width: 23.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.625rem 1rem;
  margin-top: 0.75rem;
  border: 1px solid #dadce0;
  border-radius: 6px;
  background: #fff;
  color: #3c4043;
  font-size: 0.938rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, box-shadow 0.15s;

  &:hover {
    background: #f8f9fa;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  }

  &:active {
    background: #f1f3f4;
  }
`;
