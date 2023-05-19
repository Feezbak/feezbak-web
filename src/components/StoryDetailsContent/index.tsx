import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks";
import { StoryDetailsContentWrapper } from "./styles";

const DashboardContent = () => {
  //Todo need to send request from here to get Story data by Id
  const { width, height } = useWindowSize();

  return (
    <>
      <StoryDetailsContentWrapper
        xs={18}
        sm={15}
        md={12}
        lg={10}
        xl={7}
        xxl={6}
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
