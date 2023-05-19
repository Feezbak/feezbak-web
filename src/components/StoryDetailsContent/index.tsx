import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { StoryDetailsContentWrapper } from "./styles";

const DashboardContent = () => {
  //Todo need to send request from here to get Story data by Id

  return (
    <StoryDetailsContentWrapper xs={18} sm={15} md={12} lg={10} xl={7} xxl={6}>
      <Header />
      <Details link={"https://dev.to/taronvardanyan"} />
      <Footer />
    </StoryDetailsContentWrapper>
  );
};

export default DashboardContent;
