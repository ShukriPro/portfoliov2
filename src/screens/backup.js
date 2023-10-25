import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen";
import QualificationScreen from "./screens/QualificationScreen";
import AboutScreen from "./screens/AboutScreen";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container">
      <div data-aos="fade-up">
        <HomeScreen />
      </div>
      <div data-aos="fade-up">
        <QualificationScreen />
      </div>
      <div data-aos="fade-up">
        <AboutScreen />
      </div>
    </div>
  );
}

export default App;
