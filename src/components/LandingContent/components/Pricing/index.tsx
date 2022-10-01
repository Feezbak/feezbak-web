import React from "react";
import PricingListItem from "./components/PricingListItem";
import { SectionTitle, SectionWrapper, TitleWrapper } from "../../styles";
import { PricingList } from "./styles";

const Pricing = () => {
  return (
    <SectionWrapper
      $bkg={"linear-gradient(104.09deg, #E6E2FF 0%, #FFE7E2 101.7%)"}
    >
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
