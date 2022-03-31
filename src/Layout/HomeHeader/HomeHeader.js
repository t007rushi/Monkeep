import React from "react";
import "../Header/note-header.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../context/theme-context";

export const HomeHeader = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex-row header-bar">
      <div className="flex-row spc-btwn header-left">
        <h1 className="flex-row web-logo">
          <i>MON</i>KEEP
        </h1>
      </div>
      <div className="flex-row header-righthm">
        {theme === "light" ? (
          <MdDarkMode className="header-icon" onClick={toggleTheme} />
        ) : (
          <MdLightMode className="header-icon" onClick={toggleTheme} />
        )}
        <div className="flex-row header-right-btn">
          <button className="btn">LOGIN</button>
          <button className="btn">SIGNUP</button>
        </div>
      </div>
    </header>
  );
};
