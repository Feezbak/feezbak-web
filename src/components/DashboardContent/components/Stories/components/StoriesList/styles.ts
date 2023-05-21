import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";

export const StoriesListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  ${FlexBoxEnum.CenterVertical}
`;

export const EmptyStoriesWrapper = styled.div`
  ${FlexBoxEnum.CenterVertical}

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
    max-width: 33rem;
  }
`;

export const EmptyStoriesImage = styled.img`
  width: 15rem;
  margin-bottom: 1rem;
`;
