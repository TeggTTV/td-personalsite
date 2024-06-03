import Header from "components/Header";
import React from "react";

import office from "../assets/stock office.jpg";
import Wave from "../assets/wave.png";
import one50 from "../assets/150x150.png";

import { HeadTitle } from "./HomeStyles.js";

import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      {/* <img alt="office" src={Image} style={{width: "100%"}} /> */}
      <div className="headTitle">
        <div>
          <img alt="150" src={one50} className="headshot" />
        </div>
        <div>
          <h2
            style={{
              fontSize: "2rem",
              wordWrap: "break-word",
              maxWidth: "40vw",
            }}
          >
            Hello I'm Joey Jazwinski a.k.a. TeggunDrut { " " }
            <img src={Wave} alt="wave" className="wave" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
