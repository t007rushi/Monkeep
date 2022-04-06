import React, { useState } from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import "./priority.css";

export const Priority = ({ priority, updatePriority }) => {
  const [priorityField, showpriorityField] = useState(false);

  return (
    <div className="priority-container" onClick={(e) => e.preventDefault()}>
      <RiArrowUpDownFill
        className="priority-icon"
        onClick={() => showpriorityField((prev) => !prev)}
      />

      {priorityField && (
        <div className="flex-col priority-wrapper">
          <label
            htmlFor="low"
            className={priority === "low" ? "highlight" : ""}
          >
            <input
              type="radio"
              id="low"
              name="priority"
              value="low"
              checked={priority === "low"}
              onChange={(e) => {
                updatePriority(e.target.value);
              }}
            />
            low
          </label>
          <label
            htmlFor="medium"
            className={priority === "medium" ? "highlight" : ""}
          >
            <input
              type="radio"
              id="medium"
              name="priority"
              value="medium"
              checked={priority === "medium"}
              onChange={(e) => {
                updatePriority(e.target.value);
              }}
            />
            medium
          </label>
          <label
            htmlFor="high"
            className={priority === "high" ? "highlight" : ""}
          >
            <input
              type="radio"
              id="high"
              name="priority"
              value="high"
              checked={priority === "high"}
              onChange={(e) => {
                updatePriority(e.target.value);
              }}
            />
            high
          </label>
        </div>
      )}
    </div>
  );
};
