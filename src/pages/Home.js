import React from "react";
import Contacts from "../components/Contacts.js";
import MainPageSections from "../components/MainPageSections.js";
import Footer from "../components/Footer.js";
import TestFirebase from "./TestFirebase.js"


function Home(){
    return(
        <React.Fragment>
            <div className="mainPageTitleContainer">
            <TestFirebase />
                <h1>Hi, I'm Ruoye </h1>
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
- For articles in each section:
    - tags
    - categories
    - pagination
- my CS journey
    - route the nodes
    - In each node, write not the knowledge itself, but my journey: what course/book did I take to learn it
- my thoughts
    - contents
    - comments (embedable)
*/

/* FUTURE TODO
- todolist (on home page?) that contains future changes to this site
- downloadable resume


- my projects
    - kanban
    - timeline / gantt chart
*/
export default Home;