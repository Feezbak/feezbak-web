import React from "react";
import { useResponsive } from "@/hooks";
import Header from "./components/Header";
import { useParams, useNavigate } from "react-router-dom";
import { getStoryById } from "@/api";
import { message } from "antd";
import StorySkeleton from "./components/StorySkeleton";
import useRequest from "@ahooksjs/use-request";
import { AnimatePresence } from "framer-motion";
import { FeedbackerContentWrapper, PreviewFlowWrapper } from "./styles";

const FeedbackerContent = () => {
  const navigate = useNavigate();
  const { id: storyId } = useParams();
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

  return isLessThanSm ? (
    <div>Mobile View</div>
  ) : (
    <FeedbackerContentWrapper>
      <Header />
      <PreviewFlowWrapper>
        <AnimatePresence>
          {storyDataLoading ? <StorySkeleton /> : <div>GGGGG</div>}
        </AnimatePresence>
      </PreviewFlowWrapper>
    </FeedbackerContentWrapper>
  );
};

export default FeedbackerContent;
