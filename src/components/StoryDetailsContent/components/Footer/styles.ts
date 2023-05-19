import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const DetailsFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 25rem;
  margin-top: 1.5rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  color: ${StyleEnums.gray3};
`;

export const FooterTextWithLink = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  letter-spacing: -0.01em;

  span {
    white-space: nowrap;
    cursor: pointer;
    color: ${StyleEnums.primary};
    border-bottom: 1px solid ${StyleEnums.primary};
  }
`;
