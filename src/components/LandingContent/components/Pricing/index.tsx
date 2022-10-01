import React from "react";
import PricingListItem from "./components/PricingListItem";
import { PricingList, PaddingWrapper } from "./styles";
import Offering from "./components/Offering";
import { StyleEnums } from "@/enums";
import { SectionTitle, SectionWrapper, TitleWrapper } from "../../styles";

const Pricing = () => {
  return (
    <SectionWrapper
      $bkg={"linear-gradient(104.09deg, #E6E2FF 0%, #FFE7E2 101.7%)"}
    >
      <PaddingWrapper>
        <TitleWrapper>
          <SectionTitle $spanColor={StyleEnums.blue}>
            Our Plan <br />
            <span>Free During Beta 🎉</span>
          </SectionTitle>
          <Offering />
        </TitleWrapper>
        <PricingList>
          <PricingListItem name="Free Profile" />
          <PricingListItem name="Create Unlimited Feedback cases" />
          <PricingListItem name="All Features included" />
          <PricingListItem name="Unlimited Sharing links" />
          <PricingListItem name="Customized Domains" />
        </PricingList>
      </PaddingWrapper>
    </SectionWrapper>
  );
};

export default Pricing;
