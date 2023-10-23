import styled from "styled-components";
import { prop } from "@/helpers";

export const BadgeWrapper = styled.div<{
  readonly $textColor: string;
  readonly $bgColor: string;
}>`
  text-transform: capitalize;
  border-radius: 1rem;
  padding: 0.375rem 0.75rem;
  color: ${prop("$textColor")};
  background-color: ${prop("$bgColor")};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;
