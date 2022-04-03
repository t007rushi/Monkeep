import React from "react";
import { Note } from "../../components/index";
import { useNotes } from "../../context/notes-context";
import "./trash.css";


export const TrashPage = () => {
  const { note } = useNotes();
  const trashed = note ? note.filter((item) => item.Note.inTrash) : [];

  return (
    <div className="trash">
      <Note arr={trashed} heading={<h4>TRASHED</h4>} />
    </div>
  );
};