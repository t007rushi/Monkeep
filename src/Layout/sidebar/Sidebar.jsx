import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import sidebarData from "../../data/sidebarData";

const Sidebar = ({ sidebar }) => {
  const navigator = useNavigate();

  return (
 
      <ul className="flex-row flex-col  gap-btwn sidebar active">
        {sidebarData.map(({ title, navigate, Icon }) => {
          return (
            <li
              key={title}
              className="flex-row gap-btwn cur-point sidebar-item "
              onClick={() => navigator(navigate)}
            >
              <Icon />
              <span className={sidebar ? "side-hide" : "active"}>{title}</span>
            </li>
          );
        })}
      </ul>
  );
};

export default Sidebar;
