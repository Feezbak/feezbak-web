import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { Button, Row, Col } from "antd";

export const StoryListItemWrapper = styled(Row)`
  width: 100%;
  border: 1px solid ${StyleEnums.gray4};
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StoryItemInfo = styled(Col)`
  ${FlexBoxEnum.JustifyStartHorizontal}
`;

export const StoryInfoContainer = styled.div`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
  h3 {
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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
  ${FlexBoxEnum.CenterVertical}
`;

export const StoryItemStatusAndActions = styled(Col)`
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;
