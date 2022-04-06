import React, { useState } from "react";
import "./create-note.css";
import { Editor } from "../Editor/Editor";
import { BsFillPinFill, BsPin } from "react-icons/bs";
import { useNotes } from "../../context/notes-context";
import Colorpalette from "../color/Colorpalette";
import {
  SET_TITLE,
  PIN,
  CLEAR_INPUTS,
  SET_COLOR,
  ADD_LABEL,
  SET_PRIORITY,
} from "../../constants/notesConstant";
import { Label } from "../Label/Label";
import { Priority } from "../Priority/Priority";

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
      <div className="flex-row center-it">
        <form
          className={`create-note ${notesData.color}`}
          onSubmit={(e) => {
            e.preventDefault();
            closerEditor();
            addNotes({
              ...notesData,
              description: description,
              inTrash: false,
            });
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
              <div className="flex-row gap-btwn">
                {notesData.labels.map((label) => {
                  return (
                    <div key={label} className="flex-row label-wrap">
                      <p>{label}</p>
                      <span
                        className="label-delete"
                        onClick={() =>
                          noteDispatcher({ type: ADD_LABEL, payload: label })
                        }
                      >
                        x
                      </span>
                    </div>
                  );
                })}
              </div>
              <nav className="flex-row note-options">
                <p className={notesData.priority ? "priority-tag" : ""}>
                  {notesData.priority}
                </p>
                {/* LABEL */}
                <Label
                  labels={notesData.labels}
                  addLabels={(label) => {
                    noteDispatcher({ type: ADD_LABEL, payload: label });
                  }}
                />
                {/* PRIORITY */}
                <Priority
                  priority={notesData.priority}
                  updatePriority={(priorityValue) => {
                    noteDispatcher({
                      type: SET_PRIORITY,
                      payload: priorityValue,
                    });
                  }}
                />
                {/* COLOR */}
                <Colorpalette
                  updateColor={(color) =>
                    noteDispatcher({ type: SET_COLOR, payload: color })
                  }
                />
                <button type="submit" className="btn add-btn">
                  Add
                </button>
                <button
                  className="btn secondary-btn add-btn close-btn"
                  onClick={() => {
                    closerEditor();
                    noteDispatcher({
                      type: CLEAR_INPUTS,
                      payload: initialState,
                    });
                    setDescription("");
                  }}
                >
                  Close
                </button>
              </nav>
            </div>
          )}
        </form>
      </div>
  );
};
