import React from "react";
import HomeHeader from "./HomeHeader";
//import { Scrollbars } from 'react-custom-scrollbars';

const HomeDb=()=>{
    return(
        
       <React.Fragment >
           {/* <Scrollbars style={{height:1500,width:2300}}> */}
            <HomeHeader/>
            {/*</Scrollbars>*/}
        </React.Fragment>
        
    );
}

export default HomeDb;