import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { ifProp } from "@/helpers";

export const SectionBody = styled.section<{ readonly $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  padding: 0.5rem;
  border-radius: 1.2rem;
  color: ${ifProp("$isActive", StyleEnums.white, StyleEnums.black)};
  background: ${ifProp("$isActive", StyleEnums.blue, "transparent")};

  &:hover {
    background: ${ifProp("$isActive", StyleEnums.blue, StyleEnums.gray5)};
  }
`;

export const TypeImage = styled.img`
  margin-right: 0.75rem;
  width: 6.875rem;
`;

export const TypeTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const TypeDescription = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: -0.02em;
`;

export const TypeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 12.813rem;
`;
