import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./page/LandingPage";
import HomePage from "./page/HomePage";
import StudentPage from "./page/StudentPage";
import MentorPage from "./page/MentorPage";
import SelectedStudentPage from "./page/SelectedStudent";
import SelectedMentorPage from "./page/SelectedMentor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/student/:student" element={<SelectedStudentPage />} />
          <Route path="/mentor/:mentor" element={<SelectedMentorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
