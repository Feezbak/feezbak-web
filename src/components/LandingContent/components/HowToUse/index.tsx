import React from "react";
import Card from "./components/Card";
import { SectionTitle } from "../../styles";
import { StyleEnums } from "@/enums";
import firstCardImgSrc from "@images/first-image.png";
import secondCardImgSrc from "@images/second-image.png";
import thirdCardImgSrc from "@images/third-image.png";
import { HowToUseWrapper, TitleWrapper, CardsWrapper } from "./styles";

const cardsData = [
  {
    title: "From Different Channels.",
    desc: "People are everywhere nowadays and you ask everyone in a specific channel, with feedback you can gather them in one place.",
    src: firstCardImgSrc,
  },
  {
    title: "Small Analytics, Huge Impact",
    desc: "You get different opinions and you won’t really have a definite overview of what is the final result, with Feezbak you will get an overview.",
    src: secondCardImgSrc,
  },
  {
    title: "Taking Decisions, Reassured.",
    desc: "We’re always collaborative and love when people give us their opinion, with feedback you will make sure to make the perfect decision.",
    src: thirdCardImgSrc,
  },
];

const HowToUse = () => {
  return (
    <HowToUseWrapper>
      <TitleWrapper>
        <SectionTitle $spanColor={StyleEnums.primary}>
          Everything you need <br />
          <span> to make up your mind.</span>
        </SectionTitle>
      </TitleWrapper>
      <CardsWrapper>
        {cardsData.map((card, index) => (
          <Card
            delay={index}
            key={card.title}
            title={card.title}
            desc={card.desc}
            src={card.src}
          />
        ))}
      </CardsWrapper>
    </HowToUseWrapper>
  );
};

export default HowToUse;
