import React from "react";
import "./note-header.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode, MdLogout } from "react-icons/md";
import { useTheme } from "../../context/theme-context";

const Header = ({ toggle }) => {
  const {toggleTheme} = useTheme();
  return (
    <header className="flex-row header-bar">
      <div className="flex-row spc-btwn header-left">
        <button className="ham-burger" onClick={toggle}>
          <AiOutlineMenu className="header-icon" />
        </button>
        <h1 className="flex-row web-logo"><i>MON</i>KEEP</h1>
      </div>
      <div className="flex-row header-mid">
        <AiOutlineSearch className="header-icon" />
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <div className="flex-row header-right">
        <AiOutlineSearch className="icon-active header-icon" />
        <MdDarkMode className="header-icon" onClick={toggleTheme}/>
        <MdLogout className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
