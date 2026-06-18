import styled from "styled-components";
import { inLessThan } from "@/helpers";
import { StyleEnums, FlexBoxEnum, BreakpointEnums } from "@/enums";
import { Button, Row, Col } from "antd";

export const StoryListItemWrapper = styled(Row)<{ $isPendingDelete?: boolean }>`
  width: 100%;
  border: 1px solid
    ${({ $isPendingDelete }) =>
      $isPendingDelete ? "#ffccc7" : StyleEnums.gray4};
  background: ${({ $isPendingDelete }) =>
    $isPendingDelete ? "#fff2f0" : "transparent"};
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  margin-bottom: 0.75rem;
  opacity: ${({ $isPendingDelete }) => ($isPendingDelete ? 0.7 : 1)};
  transition: border-color 0.25s ease, background 0.25s ease, opacity 0.25s ease;
  ${FlexBoxEnum.SpaceBetweenHorizontal}

  ${inLessThan(BreakpointEnums.tablet)`
    padding: 1.5rem;
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StoryItemInfo = styled(Col)`
  ${FlexBoxEnum.JustifyStartHorizontal}

  ${inLessThan(BreakpointEnums.mobile)`
      margin-bottom: 0.5rem;
  `};
`;

export const StoryInfoContainer = styled.div`
  width: 100%;
  ${FlexBoxEnum.StartStartVertical}
  p {
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
