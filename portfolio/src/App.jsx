import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/Pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
