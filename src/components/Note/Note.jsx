import React from "react";
import { useNotes } from "../../context/notes-context";
import "./note.css";
import { FiTrash2 } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineColorLens } from "react-icons/md";

export const Note = () => {
  const { note, removeFromnote } = useNotes();
  return (
    <div className="note-collection">
      {note.map((item) => {
        return (
          <div className="note" key={item._id}>
            <div>{item.NoteContent.title}</div>
            <div
              className="note-descr"
              dangerouslySetInnerHTML={{ __html: item.NoteContent.description }}
            />
            <div className="flex-row note-options-set">
              <MdOutlineColorLens onClick={() => {}}/>
              <RiInboxArchiveLine onClick={() => {}} />
              <FiTrash2 onClick={() => removeFromnote(item._id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
