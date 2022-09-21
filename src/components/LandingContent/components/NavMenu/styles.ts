import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyleEnums } from "@/enums";

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

export const NavLink = styled(Link)`
text-decoration: none;
margin: 8px;
font-weight: medium;
color: ${StyleEnums.gray1};;
  }
`;

export const ButtonContainer = styled.div`
  .ant-btn-primary {
    background-color: #181325;
    border-color: #181325;
    margin-left: 64px;
  }
`;
