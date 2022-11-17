import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';

const MainPageSections=()=>{
    return (
        <nav className="mainPageSections">
<Container>
  <Row className="section-container">
    <Col sm={4}>
        <Link className="section-link" to="/myprojects">
            My Projects
        </Link>
        <br />
        <p className="section-contents">
            ✦ Ongoing: BruinPal
            <br />
            ✦ This personal website!
            <br />
            ✦ more TBC...
        </p>
    </Col>
    <Col sm={4}>
        <Link className="section-link" to="/mycsjourney">
            My CS Journey
        </Link>
        <br />
        <p className="section-contents">
            ✦ Plant the tree!
            <br />
            ✦ CS General Knowledge
            <br />
            ✦ Data Structure and Algorithms
        </p>
    </Col>
    <Col sm={4}>
        <Link className="section-link" to="/mythoughts">
            My Thoughts
        </Link>
        <br />
        <p className="section-contents">
            ✦ My blog 1: why I need a green card
            <br />
            ✦ My blog 2: employment anxiety
            <br />
            ✦ My blog 3: 
            <br />
            ✦ My blog 4
        </p>
    </Col>
  </Row>
</Container>
</nav>
    );
}

export default MainPageSections;

{/* 
<div className="section-container">
    <div className="section">
        
    </div>
    <div className="section">
        
    </div>
    <div className="section">

    </div>
</div>
 */}