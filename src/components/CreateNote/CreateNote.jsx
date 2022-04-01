import React, { useState } from "react";
import "./create-note.css";
import Editor from "../Editor/Editor";
import { MdOutlineColorLens } from "react-icons/md";
import { BsFillPinFill, BsPin } from "react-icons/bs";
import { useNotes } from "../../context/notes-context";

export const CreateNote = () => {
  const [expand, setExpand] = useState(false);
  const closerEditor = () => {
    setExpand(false);
  };
  const expandEditor = () => {
    setExpand(true);
  };

  const [notedata, setNotedata] = useState({
    title: "",
    description: "",
    label: "",
    pin: false,
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
        closerEditor();
        addNotes(notedata);
        setNotedata({ title: "", description: "", label: "" });
      }}
    >
      <div className="flex-row note-title-pin spc-btwn ">
        <input
          className="note-title-input"
          value={notedata.title}
          onClick={expandEditor}
          placeholder={expand ? "Title" : "Take a Note..."}
          onChange={(e) => setNotedata({ ...notedata, title: e.target.value })}
        />
        {expand && (
          <button
            className="note-pin"
            type="button"
            onClick={(e) => setNotedata({ ...notedata, pin: !notedata.pin })}
          >
            {notedata.pin ? <BsFillPinFill /> : <BsPin />}
          </button>
        )}
      </div>
      {expand && (
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

            <MdOutlineColorLens class="color-palette" />
            <div className="color-palette-container">

            </div>
            <button type="submit" className="btn primary-btn add-btn">
              Add
            </button>
            <button
              className="btn secondary-btn add-btn close-btn"
              onClick={closerEditor}
            >
              Close
            </button>
          </nav>
        </div>
      )}
    </form>
  );
};
