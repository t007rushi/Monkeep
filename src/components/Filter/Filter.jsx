import React from "react";
import { useNotes } from "../../context/notes-context";
import "./filters.css";

export const Filter = () => {
  const { uniqueLabels } = useNotes();
  return (
    <div className="flex-row center-it gap-btwn filter-wrapper">
      {/* sort  */}
      <div className="flex-col">
        <h3>SORT BY</h3>
        <label htmlFor="old ones">
          <input type="radio" name="sortbydate" />
          Old Ones
        </label>
        <label htmlFor="Latest">
          <input type="radio" name="sortbydate" />
          Latest
        </label>
      </div>
      {/* Filters */}
      <div className="flex-col">
        <h3>PRIORITY</h3>
        <label htmlFor="HIGH">
          <input type="checkbox" />
          HIGH
        </label>
        <label htmlFor="MEDIUM">
          <input type="checkbox" />
          MEDIUM
        </label>
        <label htmlFor="LOW">
          <input type="checkbox" />
          LOW
        </label>
      </div>
      <div className="flex-col">
        <h3>LABELS</h3>
        <div className="labels-filter">
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
                  checked={null}
                  onChange={() => {
                  }}
                />
                {label}
              </label>
            ))}
        </div>
      </div>
    </div>
  );
};
