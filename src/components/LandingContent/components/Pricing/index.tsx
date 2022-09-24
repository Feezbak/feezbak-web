import React from "react";
import PricingListItem from "./components/PricingListItem";
import { SectionTitle, SectionWrapper } from "../../styles";
import { PricingList, TitleWrapper } from "./styles";

const Pricing = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>
        <SectionTitle>
          Our Plan <br />
          <span>Free during beta</span>
        </SectionTitle>
      </TitleWrapper>
      <PricingList>
        <PricingListItem name="Free Profile" />
        <PricingListItem name="Create Unlimited Feedback cases" />
        <PricingListItem name="All Features included" />
        <PricingListItem name="Unlimited Sharing links" />
        <PricingListItem name="Customized Domains" />
      </PricingList>
    </SectionWrapper>
  );
};

export default Pricing;
