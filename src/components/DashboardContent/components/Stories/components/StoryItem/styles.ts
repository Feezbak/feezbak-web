import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { Button, Row, Col } from "antd";

export const StoryListItemWrapper = styled(Row)`
  width: 100%;
  border: 1px solid ${StyleEnums.gray4};
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StoryItemInfo = styled(Col)`
  ${FlexBoxEnum.JustifyStartHorizontal}
`;

export const StoryInfoContainer = styled.div`
  ${FlexBoxEnum.StartStartVertical}
  h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 35rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0;
    white-space: nowrap;
  }
`;

export const StoryStatusContainer = styled.div`
  ${FlexBoxEnum.StartStartVertical}

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0 0 0.5rem 0;
  }
`;
export const StoryActionsContainer = styled.div`
  margin-left: 3.5rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  button {
    margin-right: 0.5rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ActionBtn = styled(Button)`
  padding: 0;
  width: 2rem !important;
  height: 2rem;
  border: none;
  background: ${StyleEnums.gray5};
`;

export const StoryItemStatusAndActions = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;
