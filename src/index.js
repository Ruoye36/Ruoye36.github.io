import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCsJourney from "./pages/MyCsJourney/MyCsJouney.js";
import MyProjects from "./pages/MyProjects/MyProjects.js";
import MyThoughts from "./pages/MyThoughts/MyThoughts.js";
import SDEmethodology from "./pages/MyCsJourney/menuitems/SDEmethogology";
import Cplusplus  from "./pages/MyCsJourney/menuitems/Cplusplus";
import Java from "./pages/MyCsJourney/menuitems/Java";
import ComputerNetwork from "./pages/MyCsJourney/menuitems/ComputerNetwork";
import DataStructureAlgorithms from "./pages/MyCsJourney/menuitems/DataStructureAlgorithms";
import ComputerOrganization from "./pages/MyCsJourney/menuitems/ComputerOrganization";
import OperatingSystem from "./pages/MyCsJourney/menuitems/OperatingSystem";
import LanguagesCompilers from "./pages/MyCsJourney/menuitems/LanguagesCompilers";
import Math from "./pages/MyCsJourney/menuitems/Math";
import Database from "./pages/MyCsJourney/menuitems/Database";
import MachineLearning from "./pages/MyCsJourney/menuitems/MachineLearning";
import Miscellaneous from "./pages/MyCsJourney/menuitems/Miscellaneous";

// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mycsjourney" element={<MyCsJourney />} />
      <Route path="/myprojects" element={<MyProjects />} />
      <Route path="/mythoughts" element={<MyThoughts />} />
      <Route path="/mycsjourney/sdemethodology" element={<SDEmethodology />} />
      <Route path="/mycsjourney/programming/languages/cplusplus" element={<Cplusplus />} />
      <Route path="/mycsjourney/programming/languages/java" element={<Java />} />
      <Route path="/mycsjourney/cs/computer-network" element={<ComputerNetwork />} />
      <Route path="/mycsjourney/cs/data-structure-algorithms" element={<DataStructureAlgorithms />} />
      <Route path="/mycsjourney/cs/computer-organization" element={<ComputerOrganization />} />
      <Route path="/mycsjourney/cs/operating-system" element={<OperatingSystem />} />
      <Route path="/mycsjourney/cs/languages-compilers" element={<LanguagesCompilers />} />
      <Route path="/mycsjourney/cs/math" element={<Math />} />
      <Route path="/mycsjourney/cs/database" element={<Database />} />
      <Route path="/mycsjourney/cs/machine-learning" element={<MachineLearning />} />
      <Route path="/mycsjourney/cs/misc" element={<Miscellaneous />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
