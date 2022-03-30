import React, { useState } from "react";
import "./create-note.css";
import Editor from "../Editor/Editor";
import { MdOutlineColorLens } from "react-icons/md";
import { useNotes } from "../../context/notes-context";

export const CreateNote = () => {
  const [expand, setExpand] = useState(false);
  const closer = () => {
    setExpand(false);
  };
  const expander = () => {
    setExpand(true);
  };

  const [notedata, setNotedata] = useState({
    title: "",
    description: "",
    label: "",
  });
  
  const { addNotes } = useNotes();
  const handleInput = (e) => {
    setNotedata({ ...notedata, description: e });
  };
  return (
    <form
      className="create-note"
      onSubmit={(e) => {
        e.preventDefault();
        addNotes(notedata);
      }}
    >
      <input
        className="note-title"
        onClick={expander}
        placeholder={expand ? "Title" : "Take a Note..."}
        onChange={(e) => setNotedata({ ...notedata, title: e.target.value })}
      />
      {expand ? (
        <div>
          <Editor handleInput={handleInput} />
          <nav className="flex-row note-options">
            <input
              type="text"
              placeholder="enter label"
              className="label-txt"
              onChange={(e) =>
                setNotedata({ ...notedata, label: e.target.value })
              }
            />
            <MdOutlineColorLens />
            <button type="submit" className="btn primary-btn add-btn">
              Add
            </button>
            <button className="btn secondary-btn add-btn" onClick={closer}>
              Close
            </button>
          </nav>
        </div>
      ) : null}
    </form>
  );
};
