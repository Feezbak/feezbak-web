import React from "react";
import {
  HeadingWrapper,
  TotallyFreeBtn,
  HeadingTitle,
  HeadingImg,
} from "./styles";
import headingBkgUrl from "@images/headingBckg.png";
import headingImgSrc from "@images/headingImg.png";

const Heading = () => {
  return (
    <HeadingWrapper $url={headingBkgUrl}>
      <TotallyFreeBtn>
        <p>It's Totally Free</p>
      </TotallyFreeBtn>
      <HeadingTitle>Decisions based on reliable feedback.</HeadingTitle>
      <HeadingImg src={headingImgSrc} loading="lazy" />
    </HeadingWrapper>
  );
};

export default Heading;
