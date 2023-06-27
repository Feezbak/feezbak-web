import React from "react";
import Links from "./components/Links";
import productLogoSrc from "@/assets/images/product_logo_white.svg";
import CreatorDropdownMenu from "./components/CreatorDropdownMenu";
import {
  NavigationHeaderWrapper,
  NavigationContainer,
  UserContainer,
  Logo,
} from "./styles";

type LinkDataType = {
  title: string;
  url: string;
};
interface Props {
  links: LinkDataType[];
}
const NavigationHeader = ({ links }: Props) => {
  return (
    <NavigationHeaderWrapper>
      <NavigationContainer>
        <Logo src={productLogoSrc} alt="logo" loading="lazy" />
        <Links links={links} />
      </NavigationContainer>
      <UserContainer>
        <CreatorDropdownMenu />
      </UserContainer>
    </NavigationHeaderWrapper>
  );
};

export default NavigationHeader;
