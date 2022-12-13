import React from "react";
import MobileMyCsJourney from "./MobileMyCsJourney.js"
import DesktopMyCsJourney from "./DesktopMyCsJourney.js"
import {ProSidebarProvider} from "react-pro-sidebar";
import CSmindmap from "./CSmindmap.js";
import MySidebar from "../../components/MySidebar.js"
import Burger from '../../components/Burger';
    //NOTE Warning: The tag <mySidebar> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.

//TODO make it responsive
//TODO burger sidebar https://www.digitalocean.com/community/tutorials/react-react-burger-menu-sidebar
//TODO loop render dummy
//TODO reset explorer's CSS styling https://meyerweb.com/eric/tools/css/reset/index.html

const MyCsJourney=()=>{
    // const [width,setWidth]=React.useState(window.innerWidth);
    // const breakpoint=500;

    // React.useEffect(()=>{
    //     const handleWindowResize=()=>setWidth(window.innerWidth);
    //     window.addEventListener("resize",handleWindowResize);
    //     return()=>window.removeEventListener("resize",handleWindowResize);
    // },[]);
    // return width<breakpoint? <MobileMyCsJourney />:<DesktopMyCsJourney />;
    return (
    <div className="my" id="outer-container">
    {/* <ProSidebarProvider>
        <MySidebar />
    </ProSidebarProvider> */}
    <Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div id="page-wrap">
            <CSmindmap />
        </div>
    </div>)
}

export default MyCsJourney;