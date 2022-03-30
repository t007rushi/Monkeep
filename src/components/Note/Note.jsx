import React from "react";
import { useNotes } from "../../context/notes-context";
import "./note.css";
import { FiTrash2 } from "react-icons/fi";

export const Note = () => {
  const { note, removeFromnote } = useNotes();
  return (
    <div className="note-collection">
      {note.map((item) => {
        return (
          <div className="note" key={item._id}>
            {item.NoteContent.title}
            <div
              className="note-descr"
              dangerouslySetInnerHTML={{ __html: item.NoteContent.description }}
            />
            < FiTrash2 onClick={() => removeFromnote(item._id)}/>
          </div>
        );
      })}
    </div>
  );
};
