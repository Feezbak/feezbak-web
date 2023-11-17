import { Link } from "react-router-dom";
import { FeedbackerNavWrapper, LinkTxt, SignUpButton } from "./styles";

const FeedbackerNavBar = () => {
  const token = localStorage.getItem("token");
  return (
    <FeedbackerNavWrapper>
      <LinkTxt>
        <Link to="https://www.feezbak.com/">About Feezbak</Link>
      </LinkTxt>
      {/*<LinkTxt>*/}
      {/*  <Link to="/blog">Blog</Link>*/}
      {/*</LinkTxt>*/}
      {!token && (
        <>
          <LinkTxt>
            <Link to="/sign-in">Sign In</Link>
          </LinkTxt>
          <SignUpButton type="primary" size="large" href="/sign-up">
            Sign Up
          </SignUpButton>
        </>
      )}
    </FeedbackerNavWrapper>
  );
};

export default FeedbackerNavBar;
