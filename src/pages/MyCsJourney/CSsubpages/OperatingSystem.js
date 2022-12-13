import React from "react";
import Burger from '../../../components/Burger';

function OperatingSystem(){
    return(
        <div id="outer-container">
            <Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div className="substrated" id="page-wrap">
                <h1 style={{marginLeft:"4rem"}}>Operating System: coming soon!</h1>
            </div>  
        </div>
    );
}

export default OperatingSystem;