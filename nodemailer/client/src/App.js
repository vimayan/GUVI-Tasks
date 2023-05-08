import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/Landing";
import AddUser from "./page/AddUser";
import "./page/Page.css"
import ForgetPassword from "./page/ForgetPassword";
import Login from "./page/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add_user" element={<AddUser />} />
        <Route path="/forget_password" element={<ForgetPassword/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
