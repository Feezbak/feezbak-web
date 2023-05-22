import styled from "styled-components";
import { StyleEnums, FlexBoxEnum } from "@/enums";

export const UploadWrapper = styled.div`
  cursor: pointer;
  min-width: 11.875rem;
  height: 15.5rem;
  margin-right: 1rem;
  border: 1.2px dashed ${StyleEnums.gray3};
  border-radius: 20px;
  ${FlexBoxEnum.CenterVertical}

  span {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  p {
    font-size: 0.813rem;
    line-height: 1rem;
  }
`;

export const UploadIconWrapper = styled.div`
  background: ${StyleEnums.gray4};
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
