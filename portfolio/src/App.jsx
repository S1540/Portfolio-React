import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/Pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectPage from "./components/Pages/ProjectPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
