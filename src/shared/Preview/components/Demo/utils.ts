import { Feedback } from "./types";
import { StoryTypeEnum } from "@/enums";
import { Image } from "@/constants";

export const handleResponse = (
  type: StoryTypeEnum,
  feedback: Feedback | null,
  setFeedback: (state: Feedback) => void,
  slideToNext: () => void,
  isMultiple: boolean,
  storyId: string,
  msg: string,
  images: Image[],
  activeSlideId?: string,
  respBtnId?: string,
  cleanSavedRespBtnId?: () => void
) => {
  if (type === StoryTypeEnum.TEXT_VOTING_ONLY_TEXT_RESP) {
    const feedbackResult = {
      id: storyId!,
      type,
      isComplete: true,
      isMultiple: false,
      responses: [
        {
          msg,
        },
      ],
    };
    setFeedback(feedbackResult);
  } else if (type === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP) {
    const isComplete =
      images[images.length - 1].id === activeSlideId || !isMultiple;
    const feedbackResult = {
      id: storyId!,
      type,
      isComplete,
      isMultiple,
      responses: [
        {
          msg,
          imageId: activeSlideId,
        },
      ],
    };
    if (feedback) {
      setFeedback({
        ...feedback,
        isComplete,
        isMultiple,
        responses: [
          ...feedback!.responses,
          {
            msg,
            imageId: activeSlideId,
          },
        ],
      });
    } else {
      setFeedback(feedbackResult);
    }
    isMultiple && slideToNext();
  } else if (type === StoryTypeEnum.TEXT_VOTING_ONLY_BUTTON_RESP) {
    const feedbackResult = {
      id: storyId!,
      type,
      isComplete: true,
      isMultiple: false,
      responses: [
        {
          msg,
          respBtnId,
        },
      ],
    };
    setFeedback(feedbackResult);
  } else if (
    type === StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
    type === StoryTypeEnum.COMBINED
  ) {
    const isComplete =
      images[images.length - 1].id === activeSlideId || !isMultiple;
    const feedbackResult = {
      id: storyId!,
      type,
      isComplete,
      isMultiple,
      responses: [
        {
          msg,
          imageId: activeSlideId,
          respBtnId,
        },
      ],
    };
    if (feedback) {
      const feedbackResponses = [...feedback!.responses];
      const indexOfExistingResp = feedbackResponses.findIndex(
        (resp) => resp.imageId === activeSlideId
      );
      let responses = [] as typeof feedback.responses;

      if (indexOfExistingResp === -1) {
        responses = [
          ...feedback!.responses,
          {
            msg,
            imageId: activeSlideId,
            respBtnId,
          },
        ];
      } else {
        feedbackResponses[indexOfExistingResp] = {
          msg,
          imageId: activeSlideId,
          respBtnId,
        };
        responses = feedbackResponses;
      }

      setFeedback({
        ...feedback,
        isComplete,
        isMultiple,
        responses,
      });
    } else {
      setFeedback(feedbackResult);
    }

    if (isMultiple) {
      if (type === StoryTypeEnum.COMBINED) {
        cleanSavedRespBtnId?.();
      }
      slideToNext();
    } else {
      if (type === StoryTypeEnum.COMBINED) {
        cleanSavedRespBtnId?.();
      }
    }
  }
};
