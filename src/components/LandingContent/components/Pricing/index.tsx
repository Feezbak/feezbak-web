import React from "react";
import { Col } from "antd";
import { Title1 } from "../../styles";
import PricingListItem from "./components/PricingListItem";
import { PricingWrapper } from "./styles";

const Pricing = () => {
  return (
    <PricingWrapper justify="space-around" align="top">
      <Col flex={2}>
        <Title1>Our Plan</Title1>
        <Title1 style={{ color: "#C2BAF0" }}>Free during beta</Title1>
      </Col>
      <Col flex={2}>
        <PricingListItem name="Free Profile" />
        <PricingListItem name="Create Unlimited Feedback cases" />
        <PricingListItem name="All Features included" />
        <PricingListItem name="Unlimited Sharing links" />
        <PricingListItem name="Customized Domains" />
      </Col>
    </PricingWrapper>
  );
};

export default Pricing;
