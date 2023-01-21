import React from "react";
import { DashboardPageWrapper } from "./styles";
import { NavigationHeader } from "@/shared";
import { links } from "@components/DashboardContent/utils";
const DashboardContent = () => {
  return (
    <DashboardPageWrapper>
      <NavigationHeader links={links} />
    </DashboardPageWrapper>
  );
};

export default DashboardContent;
