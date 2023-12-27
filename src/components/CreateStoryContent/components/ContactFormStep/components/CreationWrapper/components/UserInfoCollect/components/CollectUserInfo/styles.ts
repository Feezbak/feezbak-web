import styled from "styled-components";
import { FlexBoxEnum } from "@/enums";

export const UserDataCollectWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  ${FlexBoxEnum.SpaceBetweenHorizontal}
`;

export const DataCollectionWrapper = styled.div`
  height: 100%;
  ${FlexBoxEnum.StartStartVertical}
`;

export const InfoWrapper = styled.div`
  ${FlexBoxEnum.StartStartVertical}
`;

export const InfoTitle = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.25rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

export const InfoDesc = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: -0.01em;
  max-width: 80%;
`;
