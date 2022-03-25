import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { logInHandler } from "../../services";
import { useAuth } from "../../context/auth-context";

const LoginPage = () => {
  const { setUser } = useAuth();
  const [logUser, setLogUser] = useState({
    email: "",
    pass: "",
  });
  const guestUser = {
    email: "adarshbalika@gmail.com",
    pass: "adarshBalika123",
  };
  const navigator = useNavigate();
  return (
    <div className="flex-row center-it">
      <div className="form-wrap">
        <form
          className="flex-col center-it form-block"
          onSubmit={(e) => {
            e.preventDefault();
            logInHandler(logUser, setUser, navigator);
          }}
        >
          <img src="./assets/profile.png" alt="profile" className="form-img img-resp" />
          <h2 className="form-title">LOGIN</h2>
          <label htmlFor="email" className="flex-col form-input-txt">
            UserID/Email
            <input
              type="email"
              className="form-input-box"
              placeholder="monkstar@neog.camp"
              onChange={(e) =>
                setLogUser({ ...logUser, email: e.target.value })
              }
            />
          </label>
          <label htmlFor="password" className="flex-col form-input-txt">
            Password
            <input
              type="password"
              placeholder="Enter password"
              required
              className="form-input-box"
              onChange={(e) => setLogUser({ ...logUser, pass: e.target.value })}
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
          <button
            className="btn card-btn"
            onClick={(e) => {
              e.preventDefault();
              logInHandler(guestUser, setUser, navigator);
            }}
          >
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
