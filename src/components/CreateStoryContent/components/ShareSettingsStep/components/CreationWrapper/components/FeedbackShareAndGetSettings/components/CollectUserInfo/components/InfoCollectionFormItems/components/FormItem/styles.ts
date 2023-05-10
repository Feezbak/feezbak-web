import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const FormItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 1px solid ${StyleEnums.gray4};
  border-radius: 0.75rem;
  width: 22.6rem;
  background: ${StyleEnums.white};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FieldName = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: right;
  letter-spacing: -0.02em;
  margin-left: 0.625rem;
  margin-top: 0.2rem;
`;
