import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu className="table-of-contents">
      <a className="menu-item" href="/" style={{fontWeight:"bolder"}}>← Home</a>
      <a className="menu-item" href="/mycsjourney/sdemethodology">SDE Methodology</a>
      <a className="menu-item" href="/">Languages</a>
      <a className="menu-item menu-subitem" href="/mycsjourney/programming/languages/cplusplus">C++</a>
      <a className="menu-item menu-subitem" href="/mycsjourney/java">Java</a>
      <a className="menu-item" href="/">Computer Science</a>
      <a className="menu-item" href="/mycsjourney/cs/computer-network">Computer Network</a>
      <a className="menu-item" href="/">Data Structure and Algorithms</a>
      <a className="menu-item" href="/mycsjourney/cs/computer-organization">Computer Organization</a>
      <a className="menu-item" href="/mycsjourney/cs/operating-system">Operating System</a>
      <a className="menu-item" href="/mycsjourney/cs/languages-compilers">Languages and Compilers</a>
      <a className="menu-item" href="/mycsjourney/cs/math">Math</a>
      <a className="menu-item" href="/mycsjourney/cs/database">Database</a>
      <a className="menu-item" href="/mycsjourney/cs/machine-learning">Machine Learning</a>
      <a className="menu-item" href="/mycsjourney/cs/misc">Miscellaneous</a>
    </Menu>
  );
};