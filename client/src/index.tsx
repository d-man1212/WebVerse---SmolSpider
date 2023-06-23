import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./Onboarding";
import Registration from "./Registration";
import Login from "./Login";
import SSignup from "./Student/Signup/Signup";
import SMenu from "./Student/Menu";
import SDetails from "./Student/Details";
import SWDetails from "./Student/WardenDetails";
import SMDetails from "./Student/MessDetails";
import SMess from "./Student/SMess";
import SUMess from "./Student/SUMess";
import SLeave from "./Student/SLeave";
import SL from "./Student/SL";
import SAL from "./Student/SAL";
import SUL from "./Student/SUL";

// import FSignup from "./Faculty/Signup/Signup";
// import WSignup from "./Student/Signup/Signup";

const App = () => {
  return (
    <div className="mx-auto mt-4 max-w-[90%] sm:max-w-lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ssignup" element={<SSignup />} />
          <Route path="/smenu" element={<SMenu />} />
          <Route path="/sdetails" element={<SDetails />} />
          <Route path="/swdetails" element={<SWDetails />} />
          <Route path="/smdetails" element={<SMDetails />} />
          <Route path="/smess" element={<SMess />} />
          <Route path="/sumess" element={<SUMess />} />
          <Route path="/sleave" element={<SLeave />} />
          <Route path="/sl" element={<SL />} />
          <Route path="/sl" element={<SL />} />
          <Route path="/sal" element={<SAL />} />
          <Route path="/sul" element={<SUL />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
