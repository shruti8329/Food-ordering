import React from "react";
import "./HomePage.css";
import Loginpage from "../Loginpage/Loginpage";
import { assets } from "../../assets/assets";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="image-container">
        <img src={assets.smokenoodle} alt="" className="background-image" />
        <div className="homepage-content">
          <h1 className="homepage-title">Chinese Tadka</h1>
        </div>
        <div className="login-container">
          <Loginpage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
