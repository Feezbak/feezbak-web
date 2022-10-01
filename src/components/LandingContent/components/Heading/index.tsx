import React from "react";
import {
  HeadingWrapper,
  TotallyFreeBtn,
  HeadingTitle,
  HeadingImg,
  AnnouncementBadge,
} from "./styles";
import headingBkgUrl from "@images/headingBckg.png";
import headingImgSrc from "@images/headingImg.png";
import { SmilingFaceIcon } from "@icons/smilingFaceIcon";

const Heading = () => {
  return (
    <HeadingWrapper $url={headingBkgUrl}>
      <TotallyFreeBtn>
        <p>It's Totally Free</p>
      </TotallyFreeBtn>
      <HeadingTitle>Decisions based on reliable feedback.</HeadingTitle>
      <HeadingImg src={headingImgSrc} />
      <AnnouncementBadge>
        <SmilingFaceIcon />
        First 100 Accounts For Free!
      </AnnouncementBadge>
    </HeadingWrapper>
  );
};

export default Heading;
