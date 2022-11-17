import React from "react";
import MobileMyCsJourney from "./MobileMyCsJourney.js"
import DesktopMyCsJourney from "./DesktopMyCsJourney.js"

const MyCsJourney=()=>{
    const [width,setWidth]=React.useState(window.innerWidth);
    const breakpoint=500;

    React.useEffect(()=>{
        const handleWindowResize=()=>setWidth(window.innerWidth);
        window.addEventListener("resize",handleWindowResize);
        return()=>window.removeEventListener("resize",handleWindowResize);
    },[]);
    return width<breakpoint? <MobileMyCsJourney />:<DesktopMyCsJourney />;
}

export default MyCsJourney;