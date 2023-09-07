import { lazy, useMemo } from "react";
import { StoryAnalyticsWrapper } from "./styles";
import useRequest from "@ahooksjs/use-request";
import { getFeedbackAnalytics } from "@/api";
import { message } from "antd";
import { AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { PageLoader } from "@/shared";
import { StoryTypeEnum } from "@/enums";

const StoryAnalyticsByType = lazy(
  () => import("./components/StoryAnalyticsByType")
);

const StoryAnalytics = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();

  const { data: feedbacks, loading: isLoading } = useRequest(
    () => getFeedbackAnalytics(storyId ?? ""),
    {
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message ?? "");
      },
    }
  );

  const feedbackDataSelector = useMemo(() => {
    if (feedbacks) {
      const isImageViewFeedbacks =
        feedbacks.data.storyType === StoryTypeEnum.COMBINED ||
        feedbacks.data.storyType ===
          StoryTypeEnum.IMAGE_VOTING_ONLY_BUTTON_RESP ||
        feedbacks.data.storyType === StoryTypeEnum.IMAGE_VOTING_ONLY_TEXT_RESP;
      return feedbacks.data[
        isImageViewFeedbacks ? "imageResponseData" : "commentResponseData"
      ];
    }
  }, [feedbacks]);

  return (
    <StoryAnalyticsWrapper>
      <AnimatePresence>
        {!isLoading && feedbacks ? (
          <StoryAnalyticsByType
            title={feedbacks.data.storyTitle}
            storyType={feedbacks.data.storyType}
            overallVotes={feedbacks.data.storyVotesCount}
            feedbacks={feedbackDataSelector}
          />
        ) : (
          <PageLoader />
        )}
      </AnimatePresence>
    </StoryAnalyticsWrapper>
  );
};

export default StoryAnalytics;
