import { Link } from "react-router-dom";
import { ProductLogoWhite } from "@/icons";
import FeedbackerNavBar from "./components/FeedbackerNavBar";
import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/dashboard">
        <ProductLogoWhite />
      </Link>
      <FeedbackerNavBar />
    </HeaderWrapper>
  );
};

export default Header;
