import React from "react";
import { DetailsWrapper } from "./styles";

const Details = () => {
  return (
    <DetailsWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1, stiffness: 200 }}
    >
      Details
    </DetailsWrapper>
  );
};

export default Details;
