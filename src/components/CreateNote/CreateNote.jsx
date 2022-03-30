import React, { useState } from "react";
import "./create-note.css";
import Editor from "../Editor/Editor";
import { MdOutlineColorLens } from "react-icons/md";

export const CreateNote = () => {
  const [expand, setExpand] = useState(false);
  const closer = () => {
    setExpand(false);
  };
  const expander = () => {
    setExpand(true);
  };
  return (
    <div className="create-note">
      <input
        className="note-title"
        onClick={expander}
        placeholder={expand ? "Title" : "Take a Note..."}
      />
      {expand ? (
        <div>
          <Editor />
          <nav className="flex-row note-options">
            <input
              type="text"
              placeholder="enter label"
              className="label-txt"
            />
            <MdOutlineColorLens />
            <button className="btn primary-btn add-btn" onClick={closer}>
              Add
            </button>
            <button className="btn secondary-btn add-btn" onClick={closer}>
              Close
            </button>
          </nav>
        </div>
      ) : null}
    </div>
  );
};


