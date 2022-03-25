import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="flex-row center-it">
      <img src="./assets/login.png" alt="profile" className="form-img-desk" />
      <div className="form-wrap">
        <form className="flex-col center-it form-block" onSubmit={() => {}}>
          <img src="./assets/profile.png" alt="profile" className="form-img" />
          <h2 className="form-title">LOGIN</h2>
          <label htmlFor="email" className="flex-col form-input-txt">
            UserID/Email
            <input
              type="email"
              className="form-input-box"
              placeholder="monkstar@neog.camp"
              onChange={() => {}}
            />
          </label>
          <label htmlFor="password" className="flex-col form-input-txt">
            Password
            <input
              type="password"
              placeholder="Enter password"
              required
              className="form-input-box"
              onChange={(e) => {}}
            />
          </label>
          <div className="flex-row center-it form-mid">
            <input type="checkbox" className="acc-color" id="remember-me" />
            <h3>Remember me</h3>
            <p className="form-cond">Forgot your Password?</p>
          </div>
          <button type="submit" className="btn primary-btn">
            LOGIN
          </button>
          <button className="btn card-btn" onClick={(e) => {}}>
            LOGIN as GUEST
          </button>
          <Link to="/signup" className="newAcc">
            <h2>Create New Account</h2>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
