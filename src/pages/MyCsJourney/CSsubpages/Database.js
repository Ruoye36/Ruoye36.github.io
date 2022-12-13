import React from "react";
import Burger from '../../../components/Burger';

function Database(){
    return(
        <div id="outer-container">
            <Burger pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div className="substrated" id="page-wrap">
                <h1 style={{marginLeft:"4rem"}}>Database: coming soon!</h1>
            </div>  
        </div>
    );
}

export default Database;