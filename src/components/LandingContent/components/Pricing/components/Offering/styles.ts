import styled from "styled-components";

export const OfferingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 4.5rem;
`;

export const Text = styled.p`
  margin-bottom: 1.25rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
`;

export const SelectionTypes = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Type = styled.span`
  padding: 1.8rem 3rem;
  border-radius: 1.25rem;
  font-size: 1.25rem;
  line-height: 2.25rem;
  background: rgba(255, 255, 255, 0.31);

  &:first-child {
    margin-right: 0.5rem;
  }
`;
