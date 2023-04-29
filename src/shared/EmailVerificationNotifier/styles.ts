import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const VerificationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const IllustrationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70%;
`;

export const Title = styled.h3`
  max-width: 18rem;
  font-size: 1.75rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  max-width: 20rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.25rem;
`;

export const VerifyImg = styled.img`
  width: 12.5rem;
  margin-bottom: 2.75rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  p {
    max-width: 20rem;
    font-size: 1rem;
    text-align: center;
    line-height: 1.25rem;
    span {
      color: ${StyleEnums.blue};
      border-bottom: 1px solid ${StyleEnums.blue};
      cursor: pointer;
    }
  }
`;
