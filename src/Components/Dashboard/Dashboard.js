import React from "react";
import SidebarDash from "./SidebarDash";
import HomeDb from "./HomeDb";
import stylesForDash from './Dashboard.module.css';

const Dashboard = () => {
  return (
      <div className={stylesForDash.MainContainer}>
        <div className={stylesForDash.Container}>
          <SidebarDash />
          <HomeDb />
          
        </div>

      </div>
  );
};

export default Dashboard;
