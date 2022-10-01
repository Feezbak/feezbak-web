import styled from "styled-components";
import { prop } from "@/helpers";
import { StyleEnums } from "@/enums";

export const HeadingWrapper = styled.section<{ readonly $url: string }>`
  width: 100%;
  height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: url(${prop("$url")});
  position: relative;
`;

export const TotallyFreeBtn = styled.span`
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2.5rem;

  p {
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.5rem;

    background-image: linear-gradient(
      4270.36deg,
      ${StyleEnums.secondary} -14.33%,
      ${StyleEnums.gradient1} 110.03%
    );

    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const HeadingTitle = styled.h1`
  font-weight: 900;
  font-size: 4.5rem;
  line-height: 5rem;
  margin: 2.75rem 0;
  width: 50%;
  text-align: center;
`;

export const HeadingImg = styled.img`
  width: 42rem;
`;

export const AnnouncementBadge = styled.span`
  background: rgba(230, 222, 253, 0.7);
  border: 2px solid rgba(66, 55, 126, 0.5);
  backdrop-filter: blur(7.5px);
  padding: 0.75rem 1.25rem;
  border-radius: 2.5rem;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${StyleEnums.announcementActionColor};
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.75rem;
  }
`;
