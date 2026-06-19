import { useMemo } from "react";
import { useResponsive } from "@/hooks";
import Header from "./components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { getStoryById } from "@/api";
import { message } from "antd";
import StorySkeleton from "./components/StorySkeleton";
import useRequest from "@ahooksjs/use-request";
import { Preview } from "@/shared";
import { AnimatePresence } from "framer-motion";
import {
  FeedbackerContentWrapper,
  PreviewFlowWrapper,
  Watermark,
} from "./styles";
import { getErrorMessage } from "@helpers/errorMessage";

const FeedbackerContent = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const { isLessThanSm } = useResponsive();

  const { data: story, loading: storyDataLoading } = useRequest(
    () => getStoryById(storyId!),
    {
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(getErrorMessage(error));
      },
    }
  );

  const showWatermark = story?.data?.ownerPlan !== "pro";

  const flowContent = useMemo(() => {
    return story?.data && !storyDataLoading ? (
      <Preview storyData={story.data} />
    ) : (
      <StorySkeleton />
    );
  }, [story, storyDataLoading]);

  const watermark = showWatermark && (
    <Watermark
      href="https://feezbak-web.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Made with Feezbak
    </Watermark>
  );

  return isLessThanSm ? (
    <>
      {flowContent}
      {watermark}
    </>
  ) : (
    <FeedbackerContentWrapper>
      <Header />
      <PreviewFlowWrapper>
        <AnimatePresence>{flowContent}</AnimatePresence>
      </PreviewFlowWrapper>
      {watermark}
    </FeedbackerContentWrapper>
  );
};

export default FeedbackerContent;
