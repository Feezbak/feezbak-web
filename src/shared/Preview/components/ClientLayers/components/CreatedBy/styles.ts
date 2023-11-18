import styled from "styled-components";
import { FlexBoxEnum, StyleEnums } from "@/enums";

export const CreatedByWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  ${FlexBoxEnum.CenterHorizontal}

  p {
    color: ${StyleEnums.black};
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-right: 0.25rem;
  }
`;
