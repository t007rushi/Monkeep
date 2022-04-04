import React, { useState } from "react";
import { MdOutlineLabel } from "react-icons/md";
import { useNotes } from "../../context/notes-context";
import "./label.css";

export const Label = ({ tags, addTag }) => {
  const [labelop, showLabelop] = useState(false);
  const [labelTxt, setNewLabelTxt] = useState("");
  const { uniqueLabels } = useNotes();

  console.log(tags);
  return (
    <div className="labels-container" onClick={(e) => e.preventDefault()}>
      <MdOutlineLabel
        className="label-icon"
        onClick={() => showLabelop((prev) => !prev)}
      />
      {labelop && (
        <div className="labels-wrapper">
          <div className="flex-row spc-btwn gap-btwn">
            <input
              type="text"
              placeholder="enter label"
              className="label-txt"
              value={labelTxt}
              onChange={(e) => {
                setNewLabelTxt(e.target.value);
              }}
            />
            <button
              className="label-txt-add"
              onClick={() => {
                if (!tags.find((tag) => tag === labelTxt) && labelTxt !== "") {
                  addTag(labelTxt);
                }
                setNewLabelTxt("");
              }}
            >
              +
            </button>
          </div>
          <div>
            {uniqueLabels.length !== 0 &&
              uniqueLabels.map((label) => (
                <label
                  key={label}
                  className="input-checkbox flex-row"
                  htmlFor={label}
                >
                  <input
                    className="label-check-input"
                    type="checkbox"
                    name="labels"
                    id={label}
                    checked={tags.includes(label)}
                    onChange={() => {}}
                  />
                  {label}
                </label>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
