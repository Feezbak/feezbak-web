import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { Link } from "react-router-dom";

export const HowToContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8.75rem;
`;

export const Title = styled.h4`
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 1.25rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-bottom: 3.25rem;
`;

export const ContactTypes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Contact = styled(Link)`
  background: ${StyleEnums.gray5};
  border-radius: 1.25rem;
  width: 20rem;
  padding: 2.75rem;
  text-align: center;
  cursor: pointer;
  color: ${StyleEnums.gray1};

  p {
    font-size: 1.25rem;
    line-height: 2.25rem;
    margin-bottom: 0;
    white-space: nowrap;
  }

  span {
    font-size: 2.5rem;
  }

  &:first-child {
    margin-right: 1rem;
  }
`;
