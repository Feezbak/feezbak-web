import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import logoFeezbak from "@images/feezbak-logo-black.svg";

import { ButtonContainer, NavMenuWrapper, NavLink } from "./styles";

const NavMenu = () => {
  return (
    <NavMenuWrapper>
      <Row gutter={[12, 16]} justify="space-around" align="middle">
        <Col span={8}>
          <img src={logoFeezbak} alt="logo" />
        </Col>
        <Col span={16}>
          <nav>
            <NavLink to="/sign-up">Use Cases</NavLink>
            <NavLink to="/sign-up">Platform</NavLink>
            <NavLink to="/sign-up">How it works</NavLink>
          </nav>
        </Col>
      </Row>
      <Row justify="space-around" align="middle">
        <ButtonContainer>
          <Button href="/sign-up" type="primary" shape="round" size="middle">
            Try for free
          </Button>
        </ButtonContainer>
      </Row>
    </NavMenuWrapper>
  );
};

export default NavMenu;
