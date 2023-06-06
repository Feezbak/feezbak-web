import React from "react";
import logoFeezbak from "@images/product_logo.svg";
import { Link } from "react-router-dom";
import { HeaderWrapper, ProductLogo } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/dashboard">
        <ProductLogo src={logoFeezbak} alt="logo" loading="lazy" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
