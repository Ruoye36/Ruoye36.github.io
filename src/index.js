import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCsJourney from "./pages/MyCsJourney/MyCsJouney.js";
import MyProjects from "./pages/MyProjects/MyProjects.js";
import MyThoughts from "./pages/MyThoughts/MyThoughts.js";
import SDEmethodology from "./pages/MyCsJourney/CSsubpages/SDEmethogology";
import Cplusplus  from "./pages/MyCsJourney/CSsubpages/Cplusplus";
import Java from "./pages/MyCsJourney/CSsubpages/Java";
import ComputerNetwork from "./pages/MyCsJourney/CSsubpages/ComputerNetwork";
import DataStructureAlgorithms from "./pages/MyCsJourney/CSsubpages/DataStructureAlgorithms";
import ComputerOrganization from "./pages/MyCsJourney/CSsubpages/ComputerOrganization";
import OperatingSystem from "./pages/MyCsJourney/CSsubpages/OperatingSystem";
import LanguagesCompilers from "./pages/MyCsJourney/CSsubpages/LanguagesCompilers";
import Math from "./pages/MyCsJourney/CSsubpages/Math";
import Database from "./pages/MyCsJourney/CSsubpages/Database";
import MachineLearning from "./pages/MyCsJourney/CSsubpages/MachineLearning";
import Miscellaneous from "./pages/MyCsJourney/CSsubpages/Miscellaneous";

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
