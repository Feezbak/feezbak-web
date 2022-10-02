import styled from "styled-components";
import { StyleEnums } from "@/enums";
import { Button } from "antd";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 5.25rem 0 1.75rem 0;
  margin-top: 15vh;
  background-color: ${StyleEnums.pink};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BenefitsHeading = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 3.25rem;
`;

export const FooterMainTitle = styled.p`
  font-size: 3rem;
  line-height: 3.5rem;
  text-align: center;
  width: 80%;
  margin-bottom: 3.25rem;
`;

export const TryForFreeBtn = styled(Button)`
  background-color: ${StyleEnums.black};
  color: ${StyleEnums.white};
  padding: 1rem 6.5rem;
  border-radius: 2.5rem;
`;
