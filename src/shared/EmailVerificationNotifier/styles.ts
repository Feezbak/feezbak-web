import styled from "styled-components";
import { motion } from "framer-motion";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const VerificationWrapper = styled(motion.div)`
  height: 100%;
  ${FlexBoxEnum.SpaceBetweenCenterVertical}
`;

export const IllustrationWrapper = styled.div`
  margin-top: 70%;
  ${FlexBoxEnum.CenterVertical}
`;

export const Title = styled.h3`
  max-width: 18rem;
  font-size: 1.75rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  max-width: 20rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.25rem;
`;

export const VerifyImg = styled.img`
  width: 12.5rem;
  margin-bottom: 2.75rem;
`;

export const Footer = styled.div`
  margin-bottom: 4rem;
  ${FlexBoxEnum.CenterVertical}

  p {
    max-width: 20rem;
    font-size: 1rem;
    text-align: center;
    line-height: 1.25rem;
    span {
      color: ${StyleEnums.blue};
      border-bottom: 1px solid ${StyleEnums.blue};
      cursor: pointer;
    }
  }
`;
