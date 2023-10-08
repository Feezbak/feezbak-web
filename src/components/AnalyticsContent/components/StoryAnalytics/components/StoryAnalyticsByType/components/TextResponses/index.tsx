import { useMemo } from "react";
import { TextResponsesType } from "@/constants";
import { StoryTypeEnum } from "@/enums";
import TextWithButtonResp from "./components/TextWithButtonResp";
import TextWithCommentResp from "./components/TextWithCommentResp";
import { StorySlidesContainer } from "../../styles";

interface Props {
  feedbacks: TextResponsesType;
  storyType: StoryTypeEnum;
  setCommentsModalData: (commentsModalData: {
    storyId: string;
    imageId: string;
  }) => void;
}

const TextResponses = ({ feedbacks, storyType }: Props) => {
  const dataInfoComponent = useMemo(() => {
    if (storyType === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP) {
      return (
        feedbacks?.buttons && <TextWithButtonResp data={feedbacks.buttons} />
      );
    } else {
      return (
        feedbacks?.comments && (
          <TextWithCommentResp feedbacksPaginatedData={feedbacks} />
        )
      );
    }
  }, [storyType, feedbacks]);

  return <StorySlidesContainer>{dataInfoComponent}</StorySlidesContainer>;
};

export default TextResponses;
