import React from "react";
import { SmilingFaceSecondIcon } from "@/icons";
import Links from "./components/Links";
import CreatorDropdownMenu from "./components/CreatorDropdownMenu";
import {
  NavigationHeaderWrapper,
  NavigationContainer,
  UserContainer,
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
        <SmilingFaceSecondIcon />
        <Links links={links} />
      </NavigationContainer>
      <UserContainer>
        <CreatorDropdownMenu />
      </UserContainer>
    </NavigationHeaderWrapper>
  );
};

export default NavigationHeader;
