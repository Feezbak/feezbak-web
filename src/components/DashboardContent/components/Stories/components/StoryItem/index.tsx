import React, { useMemo } from "react";
import { Badge } from "@/shared";
import { StyleEnums, StoryEnums } from "@/enums";
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
    id: string;
    question: string;
    type: string;
    status: string;
  };
  handleDelete: (id: string) => void;
}
const StoryItem = ({ storyData, handleDelete }: Props) => {
  const { question, type, status } = storyData ?? {};

  const conditionalAction = useMemo(
    () => (
      <ActionBtn
        icon={
          storyData.status === StoryEnums.DRAFT ? (
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
    <StoryListItemWrapper wrap>
      <StoryItemInfo xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <StoryInfoContainer>
          <h3>{question}</h3>
          <p>{type}</p>
        </StoryInfoContainer>
      </StoryItemInfo>
      <StoryItemStatusAndActions xs={24} sm={24} md={8} lg={8} xl={8} xxl={6}>
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
          <ActionBtn
            icon={<DeleteIconGrayBg />}
            onClick={() => handleDelete(storyData.id)}
          />
        </StoryActionsContainer>
      </StoryItemStatusAndActions>
    </StoryListItemWrapper>
  );
};

export default StoryItem;
