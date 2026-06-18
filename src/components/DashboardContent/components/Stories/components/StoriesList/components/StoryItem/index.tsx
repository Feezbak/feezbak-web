import { memo, useCallback, useMemo, useState } from "react";
import { Badge } from "@/shared";
import { useNavigate } from "react-router-dom";
import { StyleEnums, StoryEnums, StoryProgressEnum } from "@/enums";
import { useTextFromHTML } from "@/hooks";
import { StorySkeleton } from "../../styles";
import {
  EditIconGrayBg,
  DeleteIconGrayBg,
  LinkIconGrayBg,
  AnalyticsIcon,
} from "@/icons";
import {
  StoryItemStatusAndActions,
  StoryActionsContainer,
  StoryListItemWrapper,
  StoryInfoContainer,
  StoryItemInfo,
  ActionBtn,
} from "./styles";

interface Props {
  storyData: {
    _id: string;
    title: string;
    progress: string;
  };
  storyId: string;
  handleDelete: (id: string) => void;
  loading: boolean;
  isPendingDelete?: boolean;
}

const StoryItem = memo(
  ({ storyData, handleDelete, storyId, loading, isPendingDelete }: Props) => {
    const [deletionId, setDeletionId] = useState("");
    const navigate = useNavigate();
    const { title, progress, _id: id } = storyData ?? {};
    const titleTextContent = useTextFromHTML(title ?? "");

    const handleEdit = useCallback(() => {
      if (!title) localStorage.setItem(storyId, JSON.stringify({ __v: "1" }));
      navigate(`/create-story/${storyId}`);
    }, [storyId, navigate, title]);

    const handleShareDetails = useCallback(() => {
      navigate(`/story-details/${storyId}`);
    }, [storyId, navigate]);

    const handleAnalytics = useCallback(() => {
      navigate(`/analytics/${storyId}`);
    }, [storyId, navigate]);

    const conditionalAction = useMemo(
      () => (
        <ActionBtn
          aria-label={
            progress !== StoryProgressEnum.STEP3 ? "Edit story" : "Share story"
          }
          onClick={
            progress !== StoryProgressEnum.STEP3
              ? handleEdit
              : handleShareDetails
          }
          icon={
            progress !== StoryProgressEnum.STEP3 ? (
              <EditIconGrayBg />
            ) : (
              <LinkIconGrayBg />
            )
          }
        />
      ),
      [progress, handleEdit, handleShareDetails]
    );

    const status = useMemo(() => {
      return progress !== StoryProgressEnum.STEP3
        ? StoryEnums.DRAFT
        : StoryEnums.COMPLETED;
    }, [progress]);

    const bgColor = useMemo(() => {
      return progress !== StoryProgressEnum.STEP3
        ? StyleEnums.draftBudgeBckg
        : StyleEnums.publishedBudgeBckg;
    }, [progress]);

    const titleText = useMemo(() => {
      if (!title) {
        return "Story was't completed! 😔";
      }
      return titleTextContent;
    }, [title, titleTextContent]);

    const handleRemoveStory = () => {
      handleDelete(id);
      setDeletionId(id);
    };

    return loading && id === deletionId ? (
      <StorySkeleton />
    ) : (
      <StoryListItemWrapper wrap $isPendingDelete={isPendingDelete}>
        <StoryItemInfo xs={24} sm={24} md={10} lg={12} xl={12} xxl={12}>
          <StoryInfoContainer>
            <p>{titleText}</p>
          </StoryInfoContainer>
        </StoryItemInfo>
        <StoryItemStatusAndActions
          xs={24}
          sm={24}
          md={10}
          lg={10}
          xl={10}
          xxl={8}
        >
          <Badge
            bgColor={bgColor as string}
            textColor={StyleEnums.white as string}
            text={status}
          />
          <StoryActionsContainer>
            {conditionalAction}
            <ActionBtn
              aria-label="Delete story"
              icon={<DeleteIconGrayBg />}
              onClick={handleRemoveStory}
              disabled={isPendingDelete}
            />
            {progress === StoryProgressEnum.STEP3 && (
              <ActionBtn
                aria-label="View analytics"
                onClick={handleAnalytics}
                icon={<AnalyticsIcon />}
              />
            )}
          </StoryActionsContainer>
        </StoryItemStatusAndActions>
      </StoryListItemWrapper>
    );
  }
);

export default StoryItem;
