import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contacts(){
    return(
        <div className='contacts'>
            <a className="section-link" href="https://www.linkedin.com/in/ruoyewang">LinkedIn</a> |&nbsp;
            <a className="section-link" href="https://github.com/Ruoye36">GitHub</a> |&nbsp;
            rywang36@g.ucla.edu
            {/* <IconContext.Provider value={{ color: "white", size: "2em"}}>
                <a href="#" className="contact-icon"><FaLinkedin /></a>
                <a href="#" className="contact-icon"><FaGithub /></a>
                <br />
                
            </IconContext.Provider> */}
        </div>

    );
}

export default Contacts;