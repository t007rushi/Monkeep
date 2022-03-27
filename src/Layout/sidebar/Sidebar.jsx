import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import sidebarData from "../../data/sidebarData";

const Sidebar = ({ sidebar }) => {
  const navigator = useNavigate();

  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <ul className="flex-row flex-col spc-btwn  gap-btwn">
        {sidebarData.map(({ title, navigate, Icon }) => {
          return (
            <li
              key={title}
              className="flex-row gap-btwn cur-point sidebar-item "
              onClick={() => navigator(navigate)}
            >
              <Icon />
              <span>{title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
