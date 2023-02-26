import React from "react";
import DashSidebar from "./sidebar/DashSidebar";
import DashHeader from "./DashHeader/DashHeader";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <DashHeader />
      <Outlet />
      <DashSidebar />
    </>
  );
};

export default Dashboard;
