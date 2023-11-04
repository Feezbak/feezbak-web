import { useEffect, useMemo, useState } from "react";
import Links from "./components/Links";
import { ProductLogoBlack } from "@/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useResponsive } from "@/hooks";
import { useResetRecoilState } from "recoil";
import { userData } from "@/recoil";
import { Dropdown } from "antd";
import CreatorDropdownMenu from "./components/CreatorDropdownMenu";
import {
  NavigationHeaderWrapper,
  NavigationContainer,
  MobileMenuItem,
  UserContainer,
  CreatorMenuItem,
} from "./styles";

export type LinkDataType = {
  title: string;
  url: string;
};

interface Props {
  links: LinkDataType[];
  mobileMenuLinks?: LinkDataType[];
}

const NavigationHeader = ({ links, mobileMenuLinks = [] }: Props) => {
  const location = useLocation();
  const [activeKeyData, setActiveKey] = useState("");
  const navigate = useNavigate();
  const { isLessThanSm } = useResponsive();
  const resetUserStore = useResetRecoilState(userData);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    resetUserStore();
    navigate("/sign-in");
  };

  const items = useMemo(
    () => [
      ...mobileMenuLinks.map((linkData, index) => ({
        key: index + 1,
        label: (
          <MobileMenuItem to={linkData.url}>
            <CreatorMenuItem>{linkData.title}</CreatorMenuItem>
          </MobileMenuItem>
        ),
      })),
      {
        key: 0,
        label: (
          <CreatorMenuItem onClick={handleLogout}>Sign Out</CreatorMenuItem>
        ),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mobileMenuLinks, navigate]
  );

  useEffect(() => {
    mobileMenuLinks?.forEach((link: LinkDataType, index: number) => {
      if (location.pathname.includes(link.url)) {
        setActiveKey(`${index + 1}`);
      }
    });
  }, [location, mobileMenuLinks]);

  return (
    <NavigationHeaderWrapper>
      <NavigationContainer>
        <Link to="/dashboard">
          <ProductLogoBlack />
        </Link>
        {!isLessThanSm && <Links links={links} />}
      </NavigationContainer>
      {isLessThanSm ? (
        <Dropdown
          menu={{
            items,
            selectable: true,
            selectedKeys: [activeKeyData],
          }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <MenuOutlined />
        </Dropdown>
      ) : (
        <UserContainer>
          <CreatorDropdownMenu handleLogout={handleLogout} />
        </UserContainer>
      )}
    </NavigationHeaderWrapper>
  );
};

export default NavigationHeader;
