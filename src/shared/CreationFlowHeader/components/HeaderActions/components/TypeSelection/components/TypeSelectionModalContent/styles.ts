import styled from "styled-components";

export const SectionTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.02em;
  margin: 1.25rem 0 1rem 0;

  &:first-child {
    margin-top: 0;
  }
`;

export const TypeSelectionModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  section:nth-of-type(1) {
    margin-right: 2rem;
  }
`;
