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
import { FeedbackerContentWrapper, PreviewFlowWrapper } from "./styles";

const FeedbackerContent = () => {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const { isLessThanSm } = useResponsive();

  const { data: story, loading: storyDataLoading } = useRequest(
    () => getStoryById(storyId!),
    {
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message);
      },
    }
  );

  const flowContent = useMemo(() => {
    return story?.data && !storyDataLoading ? (
      <Preview storyData={story.data} />
    ) : (
      <StorySkeleton />
    );
  }, [story, storyDataLoading]);

  return isLessThanSm ? (
    flowContent
  ) : (
    <FeedbackerContentWrapper>
      <Header />
      <PreviewFlowWrapper>
        <AnimatePresence>{flowContent}</AnimatePresence>
      </PreviewFlowWrapper>
    </FeedbackerContentWrapper>
  );
};

export default FeedbackerContent;
