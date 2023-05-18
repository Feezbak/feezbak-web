import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const DetailsHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
  max-width: 24.2rem;
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${StyleEnums.gray3};
`;
