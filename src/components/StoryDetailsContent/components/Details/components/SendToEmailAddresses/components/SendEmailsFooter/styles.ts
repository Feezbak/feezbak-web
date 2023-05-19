import styled from "styled-components";
import { Button, Space } from "antd";
import { StyleEnums } from "@/enums";

export const EmailFooterWrapper = styled(Space)`
  width: 94%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${StyleEnums.white};
  border: 1px solid ${StyleEnums.gray5};
  box-shadow: 0px 3px 4px rgba(99, 81, 148, 0.04);
  border-radius: 1.25rem;
  padding: 1rem;
  position: absolute;
  bottom: 1.1rem;
  right: 0;
  left: 0;
`;

export const Description = styled.p`
  max-width: 14rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.01em;
`;

export const SendEmailsBtn = styled(Button)`
  padding: 0.625rem 1.25rem;
  height: 2.5rem;
  font-size: 0.938rem;
  line-height: 20px;
`;
