import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  width: 1320px;
  justify-content: center;
  padding-top: 40px;
  position: absolute;
`;

export const NavMenuWrapper = styled.div`
  display: flex;
  height: 64px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 80px;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  position: fixed;
`;

export const PricingWrapper = styled.div`
  position: absolute;
`;

export const Title1 = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  font-weight: bolder;
  margin-bottom: 0;
`;
export const Description = styled.p`
  font-size: 0.938rem;
  line-height: 1.25rem;
  margin-bottom: 0;
`;
