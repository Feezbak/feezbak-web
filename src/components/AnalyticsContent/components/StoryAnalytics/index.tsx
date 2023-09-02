import { lazy } from "react";
import { StoryAnalyticsWrapper } from "./styles";
//import useRequest from "@ahooksjs/use-request";
//import {getFeedbackAnalytics} from "@/api";
//import {message} from "antd";
import { AnimatePresence } from "framer-motion";
//import { useParams, useNavigate } from "react-router-dom";
import { PageLoader } from "@/shared";

const StoryAnalyticsByType = lazy(
  () => import("./components/StoryAnalyticsByType")
);

const StoryAnalytics = () => {
  //    const navigate = useNavigate();
  //    const {storyId} = useParams();

  //    const { loading: isLoading } = useRequest(() => getFeedbackAnalytics(storyId ?? ""), {
  //        onError: (error: any) => {
  //            setTimeout(() => navigate("/not-found"), 2000);
  //            message.error(error?.response?.data?.message ?? "");
  //            },
  //    });

  return (
    <StoryAnalyticsWrapper>
      <AnimatePresence>
        {false ? <PageLoader /> : <StoryAnalyticsByType />}
      </AnimatePresence>
    </StoryAnalyticsWrapper>
  );
};

export default StoryAnalytics;
