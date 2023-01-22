import React from "react";
import { DashboardPageWrapper } from "./styles";
import { NavigationHeader } from "@/shared";
import { links } from "@components/DashboardContent/utils";
import { Outlet } from "react-router-dom";

const DashboardContent = () => {
  return (
    <DashboardPageWrapper>
      <NavigationHeader links={links} />
      <Outlet />
    </DashboardPageWrapper>
  );
};

export default DashboardContent;
