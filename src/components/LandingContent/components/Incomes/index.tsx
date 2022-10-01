import React, { useState } from "react";
import { StyleEnums } from "@/enums";
import { IncomesImg, IncomesImgWrapper } from "./styles";
import questionSrc from "@images/Question.png";
import resultSrc from "@images/Result.png";
import shareSrc from "@images/Share.png";
import { AnimatePresence } from "framer-motion";
import {
  SectionTitleSecondary,
  SectionWrapper,
  TitleWrapper,
} from "@components/LandingContent/styles";

const featuresDesc = [
  { text: "Get your customized links for your feedback.", src: questionSrc },
  { text: "Share it with the people you trust the most.", src: shareSrc },
  { text: "Gather feedback and make up your mind.", src: resultSrc },
];

const Incomes = () => {
  const [activeItem, setActiveItem] = useState({ number: 1, src: questionSrc });
  return (
    <AnimatePresence>
      <SectionWrapper>
        <TitleWrapper>
          {featuresDesc.map((item, index) => (
            <SectionTitleSecondary
              $color={
                activeItem.number === index + 1
                  ? StyleEnums.gray1
                  : StyleEnums.gray3
              }
              onClick={() =>
                setActiveItem({ number: index + 1, src: item.src })
              }
            >
              {item.text}
            </SectionTitleSecondary>
          ))}
        </TitleWrapper>
        <IncomesImgWrapper>
          <IncomesImg
            src={activeItem.src}
            key={activeItem.src}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.35, duration: 0.5 }}
            exit={{ scale: 0, opacity: 0 }}
            alt="features"
          />
        </IncomesImgWrapper>
      </SectionWrapper>
    </AnimatePresence>
  );
};

export default Incomes;
