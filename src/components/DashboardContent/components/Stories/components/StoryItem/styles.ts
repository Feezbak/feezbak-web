import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const StoryListItemWrapper = styled.li`
  width: 100%;
  border: 1px solid ${StyleEnums.gray4};
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StoryItemInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StoryInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0;
  }
`;

export const StoryStatusContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  p {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const StoryItemStatusAndActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
