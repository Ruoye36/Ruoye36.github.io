import React from "react";
// import starskymountains from "../images/starskymountains.jpg";
// import starskymountains_pixelated from "../images/starskymountains_pixelated.png";
import Contacts from "../components/Contacts.js";
import MainPageSections from "../components/MainPageSections.js";
import Footer from "../components/Footer.js";



function Home(){
    return(
        <React.Fragment>
            <div className="mainPageTitleContainer">
                <h1>Hi, I'm Ruoye</h1>
                <h3 className="mainPageSmallTitle">A 
                    <span className="wannabe"> wannabe <span className="tooltip">Maybe you can help me remove this word? ;-)</span>
                    </span>
                software engineer.</h3>
            </div>
            <Contacts />
            <hr />
            <p className="mainPageBio">
                Paragraph 1: [TODO] Write a brief bio.
                <br />
                Paragraph 2
                <br />
                Paragraph 3
            </p>
            <MainPageSections />
            <Footer />
            <p style={{textAlign:"center", fontSize:"small", margin:"4vh", color:"#b8d2cf"}}>Background image: photograph by Daniel Leone @ Unsplash</p>
        </React.Fragment>
    )
}


/* TODO
- padding for the contents (use a class)
- my CS journey
    - route the nodes
    - table of contents styling
- my projects
    - kanban
    - timeline / gantt chart
- my thoughts
    - contents
- deploy
- show to others
*/

/* FUTURE TODO
- hidable sidebar
- better way of organization the cs journey files
- todolist (on home page?) that contains future changes to this site
- downloadable resume
- comments (embedable)
- tags and categories for articles

*/
export default Home;