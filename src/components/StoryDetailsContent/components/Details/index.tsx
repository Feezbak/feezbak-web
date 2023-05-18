import React from "react";
import ShareSettings from "./components/ShareSettings";
import { DetailsWrapper } from "./styles";

const Details = () => {
  return (
    <DetailsWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 200 }}
    >
      <ShareSettings />
    </DetailsWrapper>
  );
};

export default Details;
