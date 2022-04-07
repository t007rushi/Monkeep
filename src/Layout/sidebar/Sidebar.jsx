import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import sidebarData from "../../data/sidebarData";
import { useHeader } from "../../context/header-context";
import { useNotes } from "../../context/notes-context";
import { MdOutlineLabel, MdOutlineNote } from "react-icons/md";

export const Sidebar = () => {
  const { sidebar } = useHeader();
  const { uniqueLabels } = useNotes();
  const labelArr = uniqueLabels.map((label) => {
    return { title: label, Icon: MdOutlineLabel, navigate: `/labels/${label}` };
  });

  const sidebarArr = [
    {
      title: "Notes",
      Icon: MdOutlineNote,
      navigate: "/notes",
    },
    ...labelArr,
    ...sidebarData,
  ];

  const NavStyles =({isActive}) =>{
    return isActive?"flex-row gap-btwn cur-point sidebar-item bg-active":"flex-row gap-btwn cur-point sidebar-item"
      }

  return (
    <ul className="flex-row flex-col  gap-btwn sidebar active">
      {sidebarArr.map(({ title, navigate, Icon }) => {
        return (
          <NavLink to={navigate}
          title={title}
            key={title}
            className={NavStyles}
          >
            <Icon />
            <span className={sidebar ? "side-hide" : "active"}>{title}</span>
          </NavLink>
        );
      })}
    </ul>
  );
};
