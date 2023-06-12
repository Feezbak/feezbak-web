import React from "react";
import { useResponsive } from "@/hooks";
import Header from "./components/Header";
//import {useParams} from "react-router-dom";
import { FeedbackerContentWrapper, PreviewFlowWrapper } from "./styles";

//const  fakeData = {
//
//}

const FeedbackerContent = () => {
  //   const { id } = useParams();
  const { isLessThanSm } = useResponsive();

  //ToDo request a data of particular story by id

  return isLessThanSm ? (
    <div>Mobile View</div>
  ) : (
    <FeedbackerContentWrapper>
      <Header />
      <PreviewFlowWrapper>Preview Wrapper Test</PreviewFlowWrapper>
    </FeedbackerContentWrapper>
  );
};

export default FeedbackerContent;
