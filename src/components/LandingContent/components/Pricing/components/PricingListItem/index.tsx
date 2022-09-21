import React from "react";
import { Col, Row } from "antd";
import Check from "@images/check.svg";
import { PricingListWrapper } from "./styles";

interface Props {
  name: string;
}

const PricingListItem = ({ name }: Props) => {
  return (
    <PricingListWrapper>
      <Row>
        <Col>
          <img src={Check} alt="sign up" style={{ paddingRight: "16px" }} />
        </Col>
        <Col>
          <text>{name}</text>
        </Col>
      </Row>
    </PricingListWrapper>
  );
};

export default PricingListItem;
