import React from "react";
import { NavigationHeader } from "@/shared";
import { links } from "@components/DashboardContent/utils";
import { Outlet } from "react-router-dom";
import { Col } from "antd";

const DashboardContent = () => {
  return (
    <Col xs={24} sm={24} md={24} lg={24} xl={15} xxl={15}>
      <NavigationHeader links={links} />
      <Outlet />
    </Col>
  );
};

export default DashboardContent;
