import React from "react";
import CSmindmap from "./CSmindmap.js";
import MyCsJourneyContents from "./MyCsJourneyContents.js";

function MobileMyCsJourney(){
    return(
        <div className="my">
            <CSmindmap />
            <MyCsJourneyContents />
        </div>
    );
}

export default MobileMyCsJourney;