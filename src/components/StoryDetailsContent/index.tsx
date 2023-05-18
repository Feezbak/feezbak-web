import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { StoryDetailsContentWrapper } from "./styles";

const DashboardContent = () => {
  return (
    <StoryDetailsContentWrapper xs={20} sm={20} md={16} lg={14} xl={8} xxl={8}>
      <Header />
      <Details />
      <Footer />
    </StoryDetailsContentWrapper>
  );
};

export default DashboardContent;
