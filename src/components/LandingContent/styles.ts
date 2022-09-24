import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const LandingContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const SectionTitle = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  font-weight: bolder;
  margin-bottom: 0;

  span {
    color: ${StyleEnums.secondaryTitle};
  }
`;

export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin-bottom: 0;
`;

export const SectionWrapper = styled.section`
  padding: 0 11%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
