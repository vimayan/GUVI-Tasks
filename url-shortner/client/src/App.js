import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./page/Page.css";
import ForgetPassword from "./page/ForgetPassword";
import LandingPage from "./page/LandingPage";
import Login from "./page/LoginPage";
import Register from "./page/Register";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget_password" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:user" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
