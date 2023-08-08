import logoFeezbak from "@images/product_logo.svg";
import { Link } from "react-router-dom";
import FeedbackerNavBar from "./components/FeedbackerNavBar";
import { HeaderWrapper, ProductLogo } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/dashboard">
        <ProductLogo src={logoFeezbak} alt="logo" loading="lazy" />
      </Link>
      <FeedbackerNavBar />
    </HeaderWrapper>
  );
};

export default Header;
