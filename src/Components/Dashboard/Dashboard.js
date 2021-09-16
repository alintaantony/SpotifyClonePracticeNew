import React from "react";
import SidebarDash from "./SidebarDash";
import HomeDb from "./HomeDb";
import stylesForDash from './Dashboard.module.css';
import { Scrollbars } from 'react-custom-scrollbars';

const Dashboard = () => {
  return (
    
      <div className={stylesForDash.MainContainer}>
        <div className={stylesForDash.Container}>
          <SidebarDash />
          {/* <Scrollbars style={{height:1500,width:2300}}> */}
          <HomeDb />
          {/* </Scrollbars> */}
        </div>

      </div>
      
  );
};

export default Dashboard;
