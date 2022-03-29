import React, { useState } from "react";
import Sidebar from "../../Layout/sidebar/Sidebar";
import Header from "../../Layout/Header/Header";
import CreateNote from "../../components/CreateNote/CreateNote";
import Note from "../../components/Note/Note";
import "./notes.css"

export const NotesPage = () => {
  const [sidebar, setSidebar] = useState(true);

  const toggle = () => setSidebar(!sidebar);
  return (
    <div className="notes">
      <Header toggle={toggle} />
      <div className="main-content">
      <Sidebar sidebar={sidebar} />
      <div className={sidebar?"note-content note-hide":"note-content "}>
      <CreateNote />
      <Note />
      </div>
      </div>
    </div>
  );
};
