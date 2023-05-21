import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";
import { Button, Col, Row } from "antd";

export const StoriesWelcomeBannerWrapper = styled(Col)`
  padding: 1.25rem 5.5rem 1.25rem 3.5rem;
  margin-top: 1.5rem;
  border-radius: 2rem;
  background-color: ${StyleEnums.creamy};
  height: max-content;
`;

export const RowWrapper = styled(Row)`
  width: 100%;
`;

export const TextContent = styled(Col)`
  h3 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.25;
    letter-spacing: -0.02em;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
  }
`;

export const BecomeProAdvice = styled.div`
  ${FlexBoxEnum.JustifyStartHorizontal}

  p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${StyleEnums.blue};
    margin: 0 0.5rem 0 0;
  }
`;

export const BecomeProBtn = styled(Button)`
  height: unset;
  border-radius: 2rem;
  padding: 0.375rem 0.75rem;
  background-color: ${StyleEnums.white};
`;

export const ImageWrapper = styled(Col)`
  ${FlexBoxEnum.JustifyEndHorizontal}
`;

export const Img = styled.img`
  width: 13.75rem;
`;
