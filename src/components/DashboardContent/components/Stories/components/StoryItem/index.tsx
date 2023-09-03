import { useCallback, useMemo } from "react";
import { Badge } from "@/shared";
import { useNavigate } from "react-router-dom";
import { StyleEnums, StoryEnums } from "@/enums";
import { useTextFromHTML } from "@/hooks";
import { EditIconGrayBg, DeleteIconGrayBg, LinkIconGrayBg } from "@/icons";
import { AreaChartOutlined } from "@ant-design/icons";
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
    _id: string;
    title: string;
    progress: string;
  };
  storyId: string;
  handleDelete: (id: string) => void;
}

const StoryItem = ({ storyData, handleDelete, storyId }: Props) => {
  console.log(storyData, 3333);
  const navigate = useNavigate();
  const { title, progress, _id: id } = storyData ?? {};
  const titleTextContent = useTextFromHTML(title ?? "");

  const handleEdit = useCallback(() => {
    if (!title) localStorage.setItem(storyId, JSON.stringify({}));
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
        onClick={progress !== "step3" ? handleEdit : handleShareDetails}
        icon={progress !== "step3" ? <EditIconGrayBg /> : <LinkIconGrayBg />}
      />
    ),
    [progress, handleEdit, handleShareDetails]
  );

  const status = useMemo(() => {
    return progress !== "step3" ? StoryEnums.DRAFT : StoryEnums.COMPLETED;
  }, [progress]);

  const bgColor = useMemo(() => {
    return progress !== "step3" ? StyleEnums.error : StyleEnums.success;
  }, [progress]);

  const titleText = useMemo(() => {
    if (!title) {
      return "Story was't completed! 😔";
    }
    return titleTextContent;
  }, [title, titleTextContent]);

  return (
    <StoryListItemWrapper wrap>
      <StoryItemInfo xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <StoryInfoContainer>
          <h3>{titleText}</h3>
        </StoryInfoContainer>
      </StoryItemInfo>
      <StoryItemStatusAndActions xs={24} sm={24} md={8} lg={8} xl={8} xxl={6}>
        <StoryStatusContainer>
          <p>Status</p>
          <Badge
            bgColor={bgColor as string}
            textColor={StyleEnums.white as string}
            text={status}
          />
        </StoryStatusContainer>
        <StoryActionsContainer>
          {conditionalAction}
          <ActionBtn
            icon={<DeleteIconGrayBg />}
            onClick={() => handleDelete(id)}
          />
          {progress === "step3" && (
            <ActionBtn onClick={handleAnalytics} icon={<AreaChartOutlined />} />
          )}
        </StoryActionsContainer>
      </StoryItemStatusAndActions>
    </StoryListItemWrapper>
  );
};

export default StoryItem;
