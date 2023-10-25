import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen";
import QualificationScreen from "./screens/QualificationScreen";
import AboutScreen from "./screens/AboutScreen";
import ProjectScreen from "./screens/ProjectScreen";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from "./components/Navigation";

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <Navigation/>
      <ProjectScreen/>
    </div>
  );
}

export default App;
