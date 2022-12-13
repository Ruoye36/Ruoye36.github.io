import React, {Component} from "react";

import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Home=()=><h1>Home</h1>;

function MySidebar(){

    const { collapseSidebar } = useProSidebar();

    return (
        <div className="table-of-contents">
        
            <Sidebar toggled="true">
            <Menu>
            <span style={{display:"flex"}}><MenuItem routerLink={<Link to="/" />}>← Home</MenuItem><button onClick={() => collapseSidebar()}>Collapse</button></span>
                
            <MenuItem routerLink={<Link to="/mycsjourney/sdemethodology" />}>SDE Methodology</MenuItem>
                <SubMenu defaultOpen="true"label="Programming "> 
                    <SubMenu label="Languages">
                        <MenuItem routerLink={<Link to="/mycsjourney/programming/languages/cplusplus" />}>C++</MenuItem>
                        <MenuItem routerLink={<Link to="/mycsjourney/programming/languages/java" />}>Java</MenuItem>
                    </SubMenu>
                </SubMenu>
                <SubMenu defaultOpen="true"label="Computer Science">
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/computer-network" />}>Computer Network</MenuItem>
                    <SubMenu label="Data Structure and Algorithms">
                        <MenuItem><a href="https://snow-eocursor-c7e.notion.site/LeetCode-Practices-4d07c40c930c48508c3f733787ee30d4">My LeetCode</a></MenuItem>
                        <MenuItem><a href="https://snow-eocursor-c7e.notion.site/Notes-on-Data-Structures-and-Algorithms-718f5eb216704ce29c49f57c8bf9c10e">My DSA Notes</a></MenuItem>
                    </SubMenu>
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/computer-organization" />}>Computer Organization</MenuItem>
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/operating-system" />}>Operating System</MenuItem>
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/languages-compilers" />}>Languages and Compilers</MenuItem>
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/math" />}>Math</MenuItem>
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/database" />}>Database</MenuItem>
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/machine-learning" />}>Machine Learning</MenuItem>
                    <MenuItem routerLink={<Link to="/mycsjourney/cs/misc" />}>Miscellaneous</MenuItem>
                </SubMenu>
            </Menu>

            </Sidebar>

        </div>
      );
}

export default MySidebar;