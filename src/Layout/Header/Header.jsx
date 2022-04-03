import React from "react";
import "./note-header.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode, MdLogout, MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/theme-context";
import { useHeader } from "../../context/header-context";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggle } = useHeader();
  const navigate = useNavigate();
  const { user, signOutHandler } = useAuth();
  const { pathname } = useLocation();
  const forbiddenpaths = ["/", "/login", "/signup"];
  return (
    <header className="flex-row header-bar">
      <div className="flex-row header-left">
        {!forbiddenpaths.includes(pathname) && (
          <button className="ham-burger" onClick={toggle}>
            <AiOutlineMenu className="header-icon" />
          </button>
        )}
        <h1 className="flex-row web-logo" onClick={() => navigate("/")}>
          <i>MON</i>KEEP
        </h1>
      </div>
      <div className="flex-row header-mid">
        <AiOutlineSearch className="header-icon" />
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div
        className={
          !user.isUserLoggedIn
            ? "flex-row header-righthm "
            : "flex-row header-right"
        }
      >
        <AiOutlineSearch className="icon-active header-icon" />
        {theme === "light" ? (
          <MdDarkMode className="header-icon" onClick={toggleTheme} />
        ) : (
          <MdLightMode className="header-icon" onClick={toggleTheme} />
        )}
        {!user.isUserLoggedIn ? (
          <div className="flex-row header-right-btn">
           {pathname !== "/login" && <button className="btn" onClick={() => navigate("/login")}>
              LOGIN
            </button>}
            {pathname !== "/signup" && <button className="btn" onClick={() => navigate("/signup")}>
              SIGNUP
            </button>}
          </div>
        ) : (
          <MdLogout className="header-icon" onClick={() => signOutHandler()} />
        )}
      </div>
    </header>
  );
};
