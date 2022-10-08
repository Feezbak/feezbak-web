import styled from "styled-components";
import { StyleEnums } from "@/enums";

export const PricingListWrapper = styled.div`
  display: flex;
  padding-bottom: 24px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${StyleEnums.black};

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
  }
`;
