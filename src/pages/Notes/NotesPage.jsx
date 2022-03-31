import React, { useState } from "react";
import { Sidebar, Header } from "../../Layout/index.js";
import { CreateNote, Note } from "../../components/index.js";
import "./notes.css";

export const NotesPage = () => {
  const [sidebar, setSidebar] = useState(true);

  const toggle = () => setSidebar(!sidebar);
  return (
    <div className="notes">
      <Header toggle={toggle} />
      <div className="main-content">
        <Sidebar sidebar={sidebar} />
        <div className={sidebar ? "note-content note-hide" : "note-content "}>
          <CreateNote />
          <Note />
        </div>
      </div>
    </div>
  );
};
