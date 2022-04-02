import React, { useState } from "react";
import { Sidebar, Header } from "../../Layout/index.js";
import { CreateNote, Note } from "../../components/index.js";
import "./notes.css";
import { useNotes } from "../../context/notes-context.js";

export const NotesPage = () => {
  const [sidebar, setSidebar] = useState(true);
  const { note } = useNotes();
  const pinnedNotes = note ? note.filter((item) => item.Note.ispin) : [];
  const otherNotes = note ? note.filter((item) => !item.Note.ispin) : [];
  const toggle = () => setSidebar(!sidebar);
  return (
    <div className="notes">
      <Header toggle={toggle} />
      <div className="main-content">
        <Sidebar sidebar={sidebar} />
        <div className={sidebar ? "note-content note-hide" : "note-content "}>
          <CreateNote />
          
          {/* PINNED */}
          <Note arr={pinnedNotes} heading={<h4>PINNED</h4>} />
    
          {/* OTHERS */}
          <Note arr={otherNotes} heading={<h4>OTHERS</h4>}/>
        </div>
      </div>
    </div>
  );
};
