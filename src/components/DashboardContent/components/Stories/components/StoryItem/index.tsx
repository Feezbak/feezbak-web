import React from "react";
import { Badge } from "@/shared";
import { StyleEnums } from "@/enums";
import {
  StoryListItemWrapper,
  StoryItemStatusAndActions,
  StoryStatusContainer,
  StoryItemInfo,
  StoryInfoContainer,
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
      </StoryItemStatusAndActions>
    </StoryListItemWrapper>
  );
};

export default StoryItem;
