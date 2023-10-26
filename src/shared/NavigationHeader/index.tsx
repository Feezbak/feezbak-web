import Links from "./components/Links";
import { ProductLogoBlack } from "@/icons";
import { Link } from "react-router-dom";
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
        <Link to="/dashboard">
          <ProductLogoBlack />
        </Link>
        <Links links={links} />
      </NavigationContainer>
      <UserContainer>
        <CreatorDropdownMenu />
      </UserContainer>
    </NavigationHeaderWrapper>
  );
};

export default NavigationHeader;
