import React, { useState } from "react";
import "../CreateNote/create-note.css";
import "./editorModal.css";
import { Editor } from "../Editor/Editor";
import { BsFillPinFill, BsPin } from "react-icons/bs";
import { useNotes } from "../../context/notes-context";
import Colorpalette from "../color/Colorpalette";
import { Label } from "../Label/Label";

export const EditorModal = ({ id, currentNote, showModal }) => {

  const { updateNote } = useNotes();
  const [updateNoted, setUpdateNoted] = useState(currentNote);

  
  const handleInput = (e) => {
    setUpdateNoted({ ...updateNoted, description: e });
  };

  return (
    <div className="modal">
      <form
        className={`create-note ${updateNoted.color}`}
        onSubmit={(e) => {
          e.preventDefault();
          updateNote(updateNoted, id);
          showModal(false);
        }}
      >
        <div className="flex-row note-title-pin spc-btwn ">
          <input
            className="note-title-input"
            value={updateNoted.title}
            onChange={(e) => {
              setUpdateNoted({ ...updateNoted, title: e.target.value });
            }}
          />

          <button
            className="note-pin"
            type="button"
            onClick={() => {
              setUpdateNoted({ ...updateNoted, ispin: !updateNoted.ispin });
            }}
          >
            {updateNoted.ispin ? <BsFillPinFill /> : <BsPin />}
          </button>
        </div>
        <div>
          {/* REACT QUILL EDITOR */}
          <Editor
            handleInput={handleInput}
            description={updateNoted.description}
          />

          <div className="flex-row gap-btwn">
            {updateNoted.labels.map((label) => {
              return (
                <div key={label} className="flex-row label-wrap">
                  <p>{label}</p>
                  <span
                    className="label-delete"
                    onClick={() => {
                      setUpdateNoted({
                        ...updateNoted,
                        labels: updateNoted.labels.filter(
                          (curr) => curr !== label
                        ),
                      });
                    }}
                  >
                    x
                  </span>
                </div>
              );
            })}
          </div>
          <nav className="flex-row note-options">
            {/* LABEL */}
            <Label
              labels={updateNoted.labels}
              addLabels={(label) => {
                setUpdateNoted({
                  ...updateNoted,
                  labels: updateNoted.labels.includes(label)
                    ? updateNoted.labels.filter((tag) => tag !== label)
                    : [...updateNoted.labels, label],
                });
              }}
            />

            {/* COLOR PALETTE */}
            <Colorpalette
              updateColor={(color) => {
                setUpdateNoted({ ...updateNoted, color: color });
              }}
            />
            <button type="submit" className="btn add-btn">
              Edit
            </button>
            <button
              className="btn secondary-btn add-btn close-btn"
              onClick={() => {
                showModal(false);
              }}
            >
              Close
            </button>
          </nav>
        </div>
      </form>
    </div>
  );
};
