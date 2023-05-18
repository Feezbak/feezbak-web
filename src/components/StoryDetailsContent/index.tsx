import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { StoryDetailsContentWrapper } from "./styles";

const DashboardContent = () => {
  //Todo need to send request from here to get Story data by Id

  return (
    <StoryDetailsContentWrapper xs={20} sm={20} md={16} lg={14} xl={7} xxl={7}>
      <Header />
      <Details />
      <Footer />
    </StoryDetailsContentWrapper>
  );
};

export default DashboardContent;
