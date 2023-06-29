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
