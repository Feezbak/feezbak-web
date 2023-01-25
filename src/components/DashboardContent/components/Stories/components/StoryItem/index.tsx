import React, { useMemo } from "react";
import { Badge } from "@/shared";
import { StyleEnums, StoryStatusEnums } from "@/enums";
import { EditIconGrayBg, DeleteIconGrayBg, LinkIconGrayBg } from "@/icons";
import {
  StoryItemStatusAndActions,
  StoryActionsContainer,
  StoryListItemWrapper,
  StoryStatusContainer,
  StoryInfoContainer,
  StoryItemInfo,
  ActionBtn,
} from "./styles";

interface Props {
  storyData: {
    id: number;
    question: string;
    type: string;
    status: string;
  };
}
const StoryItem = ({ storyData }: Props) => {
  const { question, type, status } = storyData ?? {};

  const conditionalAction = useMemo(
    () => (
      <ActionBtn
        icon={
          storyData.status === StoryStatusEnums.DRAFT ? (
            <EditIconGrayBg />
          ) : (
            <LinkIconGrayBg />
          )
        }
      />
    ),
    [storyData]
  );

  return (
    <StoryListItemWrapper>
      <StoryItemInfo>
        <StoryInfoContainer>
          <h3>{question}</h3>
          <p>{type}</p>
        </StoryInfoContainer>
      </StoryItemInfo>
      <StoryItemStatusAndActions>
        <StoryStatusContainer>
          <p>Status</p>
          <Badge
            bgColor={StyleEnums.success as string}
            textColor={StyleEnums.white as string}
            text={status}
          />
        </StoryStatusContainer>
        <StoryActionsContainer>
          {conditionalAction}
          <ActionBtn icon={<DeleteIconGrayBg />} />
        </StoryActionsContainer>
      </StoryItemStatusAndActions>
    </StoryListItemWrapper>
  );
};

export default StoryItem;
