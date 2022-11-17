import React from "react";
import CSmindmap from "./CSmindmap.js";
import MyCsJourneyContents from "./MyCsJourneyContents.js";

function DesktopMyCsJourney(){
    return(
        <div className="my cs-journey">
            <MyCsJourneyContents />
            <CSmindmap />
        </div>
    );
}

export default DesktopMyCsJourney;