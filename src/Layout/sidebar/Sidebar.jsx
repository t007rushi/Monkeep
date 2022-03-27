import React from "react";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineLabel, MdOutlineNote } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./sidebar.css";

const Sidebar = ({sidebar}) => {
  return (
    <nav className={sidebar?"sidebar active":"sidebar"}>
      <ul className="flex-row flex-col spc-btwn  gap-btwn">
        <li className="flex-row gap-btwn cur-point ">
          <MdOutlineNote />
          <span>Notes</span>
        </li>
        <li className="flex-row gap-btwn  cur-point">
          <MdOutlineLabel />
          <span>Labels</span>
        </li>
        <li className="flex-row gap-btwn cur-point">
          <RiInboxArchiveLine />
          <span>Archives</span>
        </li>
        <li className="flex-row gap-btwn cur-point">
          <FiTrash2 />
          <span>Trash</span>
        </li>
        <li className="flex-row gap-btwn cur-point">
          <CgProfile />
          <span>Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
