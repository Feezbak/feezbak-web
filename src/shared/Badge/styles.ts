import styled from "styled-components";
import { prop } from "@/helpers";

export const BadgeWrapper = styled.div<{
  readonly $textColor: string;
  readonly $bgColor: string;
}>`
  text-transform: capitalize;
  border-radius: 1rem;
  padding: 0.25rem 0.625rem;
  color: ${prop("$textColor")};
  background-color: ${prop("$bgColor")};
`;
