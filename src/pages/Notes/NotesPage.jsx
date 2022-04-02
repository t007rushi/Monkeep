import React from "react";
import "./notes.css";
import { CreateNote, Note } from "../../components/index.js";
import { useNotes } from "../../context/notes-context.js";

export const NotesPage = () => {
  const { note } = useNotes();
  const pinnedNotes = note ? note.filter((item) => item.Note.ispin) : [];
  const otherNotes = note ? note.filter((item) => !item.Note.ispin) : [];
  return (
    <div className="notes">
      <CreateNote />

      {/* PINNED */}
      <Note arr={pinnedNotes} heading={<h4>PINNED</h4>} />

      {/* OTHERS */}
      <Note arr={otherNotes} heading={<h4>OTHERS</h4>} />
    </div>
  );
};
