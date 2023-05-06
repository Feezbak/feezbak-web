import styled from "styled-components";

export const StoriesListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmptyStoriesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
  }
  p {
    ont-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    letter-spacing: -0.03em;
    display: inline-block;
    max-width: 30rem;
  }
`;

export const EmptyStoriesImage = styled.img`
  width: 15rem;
  margin-bottom: 1rem;
`;
