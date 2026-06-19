import { lazy, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { opacityAnimation } from "@assets/framerAnimations";
import { StoryAnalyticsWrapper } from "./styles";
import useRequest from "@ahooksjs/use-request";
import { getFeedbackAnalytics, exportStoryCsv } from "@/api";
import { message } from "antd";
import { AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { PageLoader } from "@/shared";
import { StoryTypeEnum } from "@/enums";
import { getErrorMessage } from "@helpers/errorMessage";
import { useRecoilValue } from "recoil";
import { userData } from "@/recoil";
import UpgradeModal from "@/components/UpgradeModal";

const StoryAnalyticsByType = lazy(
  () => import("./components/StoryAnalyticsByType")
);

const StoryAnalytics = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const user = useRecoilValue(userData);
  const isPro = user?.plan === "pro";
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [exporting, setExporting] = useState(false);

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

  const handleExportCsv = async () => {
    if (!isPro) {
      setShowUpgrade(true);
      return;
    }
    try {
      setExporting(true);
      const csv = await exportStoryCsv(storyId ?? "");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `story-${storyId}-responses.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err: any) {
      message.error(getErrorMessage(err));
    } finally {
      setExporting(false);
    }
  };

  return (
    <>
      {!isLoading && feedbacks && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "0.75rem",
          }}
        >
          <button
            onClick={handleExportCsv}
            disabled={exporting}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1rem",
              borderRadius: "0.625rem",
              border: "1.5px solid #e0e0e0",
              background: "#fff",
              cursor: "pointer",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#444",
              opacity: exporting ? 0.6 : 1,
            }}
          >
            <span>⬇</span>
            {exporting ? "Exporting…" : "Export CSV"}
            {!isPro && (
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  background: "#FF5733",
                  color: "#fff",
                  padding: "0.15rem 0.45rem",
                  borderRadius: "999px",
                  marginLeft: "0.25rem",
                }}
              >
                Pro
              </span>
            )}
          </button>
        </div>
      )}
      <StoryAnalyticsWrapper>
        <AnimatePresence exitBeforeEnter>
          {!isLoading && feedbacks ? (
            hasVotes ? (
              <StoryAnalyticsByType
                key="analytics"
                title={feedbacks.data.storyTitle}
                storyType={feedbacks.data.storyType}
                overallVotes={feedbacks.data.storyVotesCount}
                feedbacks={feedbackDataSelector}
              />
            ) : (
              <motion.div
                key="empty"
                {...opacityAnimation}
                style={{ textAlign: "center", opacity: 0.45 }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
                  📭
                </div>
                <h3 style={{ marginBottom: "0.5rem" }}>No responses yet</h3>
                <p>Share your story link to start collecting feedback.</p>
              </motion.div>
            )
          ) : (
            <PageLoader key="loader" />
          )}
        </AnimatePresence>
      </StoryAnalyticsWrapper>
      <UpgradeModal
        open={showUpgrade}
        onClose={() => setShowUpgrade(false)}
        reason="Export your story responses as a CSV file."
      />
    </>
  );
};

export default StoryAnalytics;
