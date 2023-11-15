import styled, { css } from "styled-components";
import { Input, Button, Drawer } from "antd";
import { FlexBoxEnum, StyleEnums } from "@/enums";
const { TextArea } = Input;

export const CommentMainDrawer = styled(Drawer)`
  padding: 1.5rem 1rem;
  background: ${StyleEnums.white};
  .ant-drawer-body {
    ${FlexBoxEnum.SpaceBetweenColumnStretch}
    padding: 0;
  }
`;

export const TextField = styled(TextArea)`
  width: 100%;
  border: none;
  min-height: 5rem !important;
  overflow-y: auto !important;
  height: 100% !important;
  outline: none;
  padding: 0;
  box-shadow: none;
  border-radius: unset;
  font-size: 1rem;
  margin-top: 2.375rem;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.32px;
  }
`;

export const btnStyles = css`
  border: none;
  width: 2.5rem !important;
  height: 2.5rem;
`;

export const SendMSGBtn = styled(Button)`
  width: 100%;
  color: ${StyleEnums.white};
  margin-top: 1rem;
  background: ${StyleEnums.black};
  ${FlexBoxEnum.CenterHorizontal}
`;

export const CloseBtn = styled(Button)`
  ${btnStyles};
  margin-right: 0.25rem;
  border-radius: 50%;
  background: transparent;
  ${FlexBoxEnum.CenterHorizontal}
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: -0.4px;
  margin-top: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.3px;
  color: ${StyleEnums.gray3};
  margin-top: 0.5rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;
