import React from "react";
import { Button } from "antd";
import logoFeezbak from "@images/product_logo.svg";
import { NavMenuWrapper, NavLink, Nav } from "./styles";

const NavMenu = () => {
  return (
    <NavMenuWrapper>
      <img src={logoFeezbak} alt="logo" loading="lazy" />
      <Nav>
        <NavLink to="/use-cases">Use Cases</NavLink>
        <NavLink to="/solutions">Platform</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
      </Nav>
      <Button href="/sign-up" type="primary" shape="round" size="middle">
        Try for free
      </Button>
    </NavMenuWrapper>
  );
};

export default NavMenu;
