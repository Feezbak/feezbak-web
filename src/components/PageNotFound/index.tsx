import React from "react";
import notFoundPageSrc from "@images/page-not-found.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { NotFoundWrapper, NotFoundIllustration } from "./styles";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundWrapper>
      <NotFoundIllustration
        loading="lazy"
        src={notFoundPageSrc}
        alt="Page not found"
        title="Page not found"
      />
      <Button type="primary" onClick={handleGoBack}>
        Go to previuse page
      </Button>
    </NotFoundWrapper>
  );
};

export default PageNotFound;
