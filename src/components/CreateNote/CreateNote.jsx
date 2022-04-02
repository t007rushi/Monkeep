import React, { useState } from "react";
import "./create-note.css";
import Editor from "../Editor/Editor";

import { BsFillPinFill, BsPin } from "react-icons/bs";
import { useNotes } from "../../context/notes-context";
import Colorpalette from "../color/Colorpalette";
import { SET_TITLE, PIN, CLEAR_INPUTS, SET_COLOR } from "../../constants/notesConstant";

export const CreateNote = () => {
  const [expand, setExpand] = useState(false);

  const [description, setDescription] = useState("");
  const closerEditor = () => {
    setExpand(false);
  };
  const expandEditor = () => {
    setExpand(true);
  };
  const { notesData, noteDispatcher, addNotes, initialState } = useNotes();

  const handleInput = (e) => {
    setDescription(e);
  };
  return (
    <form
      className={`create-note ${notesData.color}`}
      onSubmit={(e) => {
        e.preventDefault();
        closerEditor();
        addNotes({ ...notesData, description: description, inTrash: false });
        noteDispatcher({ type: CLEAR_INPUTS, payload: initialState });
        setDescription("");
      }}
    >
      <div className="flex-row note-title-pin spc-btwn ">
        <input
          className="note-title-input"
          value={notesData.title}
          onClick={expandEditor}
          placeholder={expand ? "Title" : "Take a Note..."}
          onChange={(e) =>
            noteDispatcher({ type: SET_TITLE, payload: e.target.value })
          }
        />
        {expand && (
          <button
            className="note-pin"
            type="button"
            onClick={() => noteDispatcher({ type: PIN })}
          >
            {notesData.ispin ? <BsFillPinFill /> : <BsPin />}
          </button>
        )}
      </div>
      {expand && (
        <div>
          <Editor handleInput={handleInput} description={description} />
          <nav className="flex-row note-options">
            <input
              type="text"
              placeholder="enter label"
              className="label-txt"
              onChange={(e) => {}}
            />
            <Colorpalette updateColor={
              color => noteDispatcher({ type: SET_COLOR, payload: color })
            } />
            <button type="submit" className="btn add-btn">
              Add
            </button>
            <button
              className="btn secondary-btn add-btn close-btn"
              onClick={() => {
                closerEditor();
                noteDispatcher({ type: CLEAR_INPUTS, payload: initialState });
                setDescription("");
              }}
            >
              Close
            </button>
          </nav>
        </div>
      )}
    </form>
  );
};
