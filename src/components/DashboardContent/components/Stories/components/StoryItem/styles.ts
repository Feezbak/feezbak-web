import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { Button, Row, Col } from "antd";

export const StoryListItemWrapper = styled(Row)`
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

export const StoryItemInfo = styled(Col)`
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
    margin: 0 0 0.25rem 0;
    white-space: nowrap;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0;
    white-space: nowrap;
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
    margin: 0 0 0.5rem 0;
  }
`;
export const StoryActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3.5rem;

  button {
    &:last-child {
      margin-left: 0.5rem;
    }
  }
`;

export const ActionBtn = styled(Button)`
  padding: 0;
  width: 2rem !important;
  height: 2rem;
  border: none;
`;

export const StoryItemStatusAndActions = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
