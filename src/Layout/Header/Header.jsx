import React from "react";
import "./note-header.css";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { MdDarkMode, MdLogout } from "react-icons/md";

const Header = ({toggle}) => {

  return (
    <header class="flex-row header-bar">
      <div class="flex-row spc-btwn header-left">
    <button className="ham-burger" onClick={toggle}>  <AiOutlineMenu className="header-icon" /> </button>  

        <h1 class="flex-row web-logo">Monkeep</h1>
      </div>
      <div class="flex-row header-mid">
        <AiOutlineSearch className="header-icon" />
        <input type="text" placeholder="Search" class="search-bar" />
      </div>
      <div class="flex-row header-right">
        <AiOutlineSearch className="icon-active header-icon" />
        <MdDarkMode className="header-icon" />
        <MdLogout className="header-icon" />
      </div>
    </header>
  );
};

export default Header;
