import { lazy, useMemo } from "react";
import { StoryAnalyticsWrapper } from "./styles";
import useRequest from "@ahooksjs/use-request";
import { getFeedbackAnalytics } from "@/api";
import { message } from "antd";
import { AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { PageLoader } from "@/shared";
import { StoryTypeEnum } from "@/enums";
import { getErrorMessage } from "@helpers/errorMessage";

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
        message.error(getErrorMessage(error));
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
        isImageViewFeedbacks ? "imageResponseData" : "textResponse"
      ];
    }
  }, [feedbacks]);

  const hasVotes = feedbacks && feedbacks.data.storyVotesCount > 0;

  return (
    <StoryAnalyticsWrapper>
      <AnimatePresence>
        {!isLoading && feedbacks ? (
          hasVotes ? (
            <StoryAnalyticsByType
              title={feedbacks.data.storyTitle}
              storyType={feedbacks.data.storyType}
              overallVotes={feedbacks.data.storyVotesCount}
              feedbacks={feedbackDataSelector}
            />
          ) : (
            <div
              style={{ textAlign: "center", padding: "4rem 0", opacity: 0.45 }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
                📭
              </div>
              <h3 style={{ marginBottom: "0.5rem" }}>No responses yet</h3>
              <p>Share your story link to start collecting feedback.</p>
            </div>
          )
        ) : (
          <PageLoader />
        )}
      </AnimatePresence>
    </StoryAnalyticsWrapper>
  );
};

export default StoryAnalytics;
