import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const HomePage = () => {
  return (
    <div className="home-intro flex-row">
      <div className="home-descr flex-col center-it spc-btwn">
        <span className="home-head">
          <i className="sec-color">MON</i>KEEP
        </span>
        <div className="flex-col gap-btwn">
          <h3>MEET YOUR MODERN DAY</h3>
          <h1 className="sec-color">Note Taking App</h1>
          <p>
            We can't run from things getting out of hands , <br />
            even Doctor Strange Can't run from it🏃🏻‍♂️
          </p>
          <p>
            So, Your one stop solution is here, Make Notes 📝 to keep yourself
            Accountable✅
          </p>
        </div>
        <div className="flex-col gap-btwn">
          <Link to="/signup" className="undle">
            <button className="btn primary-btn bold">JOIN NOW </button>
          </Link>
          <span>
            Already have an Account?
            <Link to="/login" className="sec-color undle">
              Login
            </Link>
          </span>
        </div>
      </div>
      <img src="./assets/home.png" alt="home" className="home-img" />
    </div>
  );
};
