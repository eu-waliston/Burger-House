import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="info-home">
          <div className="left-side">
            <div className="top_title_peq">
                <p className="title_peq">it is good time for the great taste of burgers</p>
            </div>
            <h1 className="top_title_gran">burger</h1>
            <h2 className="top_sub_title">week</h2>
          </div>
          <div className="right-side">
            <img className="burger-mage" alt="burger" src={require("../images/home-image.png")}/>
            <div className="home-price">
                <img alt="icon" className="icon-home" src={require("../images/home-icon.png")}/>
                <p className="price"><span>$5</span>.49</p>
                <p className="price">only</p>
            </div>
          </div>
      </div>

    </div>
  );
};

export default Home;
