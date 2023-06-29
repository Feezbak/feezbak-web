import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks";
import useRequest from "@ahooksjs/use-request";
import { getStoryById } from "@/api";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { StoryDetailsContentWrapper } from "./styles";

const DashboardContent = () => {
  const { id: storyId } = useParams();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  const { loading: storyDataLoading } = useRequest(
    () => getStoryById(storyId!),
    {
      onSuccess: (resp) => {
        if (resp?.data) {
          console.log(resp.data, 4444);
        }
      },
      onError: (error: any) => {
        setTimeout(() => navigate("/not-found"), 2000);
        message.error(error?.response?.data?.message);
      },
    }
  );

  return (
    <>
      <StoryDetailsContentWrapper
        xs={22}
        sm={20}
        md={15}
        lg={12}
        xl={9}
        xxl={7}
      >
        <Header />
        <Details link={"https://dev.to/taronvardanyan"} />
        <Footer />
      </StoryDetailsContentWrapper>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={1200}
      />
    </>
  );
};

export default DashboardContent;
