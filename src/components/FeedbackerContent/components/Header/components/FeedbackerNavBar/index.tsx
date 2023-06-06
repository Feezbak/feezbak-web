import React from "react";
import { Link } from "react-router-dom";
import { FeedbackerNavWrapper, LinkTxt, SignUpButton } from "./styles";

const FeedbackerNavBar = () => {
  const userData = localStorage.getItem("userData");
  return (
    <FeedbackerNavWrapper>
      <LinkTxt>
        <Link to="/about">About Feezbak</Link>
      </LinkTxt>
      <LinkTxt>
        <Link to="/blog">Blog</Link>
      </LinkTxt>
      {!userData && (
        <>
          <LinkTxt>
            <Link to="/sign-in">Sign In</Link>
          </LinkTxt>
          <SignUpButton type="primary" href="/sign-up">
            Sign Up
          </SignUpButton>
        </>
      )}
    </FeedbackerNavWrapper>
  );
};

export default FeedbackerNavBar;
