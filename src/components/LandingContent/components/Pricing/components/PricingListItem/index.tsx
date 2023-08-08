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
          <img
            src={Check}
            alt="sign up"
            style={{ paddingRight: "16px" }}
            loading="lazy"
          />
        </Col>
        <Col>
          <p>{name}</p>
        </Col>
      </Row>
    </PricingListWrapper>
  );
};

export default PricingListItem;
