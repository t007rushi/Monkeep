import React from "react";
import "./note-header.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode, MdLogout, MdLightMode} from "react-icons/md";
import {IoMdOptions} from "react-icons/io";
import { useTheme } from "../../context/theme-context";
import { useHeader } from "../../context/header-context";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggle, ShowFilters } = useHeader();
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
        <NavLink to="/" className="flex-row web-logo">
          <i>MON</i>KEEP
        </NavLink>
      </div>
      {user.isUserLoggedIn && (
        <div className="flex-row header-mid">
          <AiOutlineSearch className="header-icon" />
          <NavLink to="/search"> <input
            type="text"
            placeholder="Search"
            className="search-bar"
          /></NavLink>
          <NavLink to="/search"> <IoMdOptions className="filter-icon" onClick={() => {
            ShowFilters();
          }}/></NavLink>
        </div>
      )}
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
            {pathname !== "/login" && (
              <NavLink to="/login" className="btn auth-btn">
                LOGIN
              </NavLink>
            )}
            {pathname !== "/signup" && (
              <NavLink to="/signup" className="btn auth-btn">
                SIGNUP
              </NavLink>
            )}
          </div>
        ) : (
          <MdLogout className="header-icon" onClick={() => signOutHandler()} />
        )}
      </div>
    </header>
  );
};
