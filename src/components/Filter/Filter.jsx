import React from "react";
import {
  CLEAR_FILTER,
  PRIORITY_FILTER,
  SORT_BY,
  TAGS_FILTER,
} from "../../constants/filterConstants";
import { useFilter } from "../../context/filter-context";
import { useNotes } from "../../context/notes-context";
import "./filters.css";

export const Filter = () => {
  const { uniqueLabels } = useNotes();
  const { filterState, filterDispatcher } = useFilter();
  return (
    <>
    <div className="flex-row gap-btwn filter-clear-op">
    <h3>FILTERS</h3>
    <h3
      onClick={() => {
        filterDispatcher({ type: CLEAR_FILTER });
      }}
    >
      CLEAR
    </h3>
  </div>
    <div className="flex-row center-it gap-btwn filter-wrapper">
      {/* sort  */}
      <div className="flex-col gap-btwn">
        <h3>SORT BY</h3>
        <label htmlFor="old ones">
          <input
            type="radio"
            value="old"
            name="sortbydate"
            checked={filterState.sortby === "old"}
            onChange={(e) => {
              filterDispatcher({
                type: SORT_BY,
                payload: e.target.value,
              });
            }}
          />
          Old Ones
        </label>
        <label htmlFor="Latest">
          <input
            type="radio"
            value="new"
            name="sortbydate"
            checked={filterState.sortby === "new"}
            onChange={(e) => {
              filterDispatcher({
                type: SORT_BY,
                payload: e.target.value,
              });
            }}
          />
          Latest
        </label>
      </div>
      {/* Filters */}
      <div className="flex-col gap-btwn">
        <h3>PRIORITY</h3>
        <label htmlFor="HIGH">
          <input
            type="checkbox"
            value="high"
            checked={filterState.priorities.includes("high")}
            onChange={(e) => {
              filterDispatcher({
                type: PRIORITY_FILTER,
                payload: e.target.value,
              });
            }}
          />
          HIGH
        </label>
        <label htmlFor="MEDIUM">
          <input
            type="checkbox"
            value="medium"
            checked={filterState.priorities.includes("medium")}
            onChange={(e) => {
              filterDispatcher({
                type: PRIORITY_FILTER,
                payload: e.target.value,
              });
            }}
          />
          MEDIUM
        </label>
        <label htmlFor="LOW">
          <input
            type="checkbox"
            value="low"
            checked={filterState.priorities.includes("low")}
            onChange={(e) => {
              filterDispatcher({
                type: PRIORITY_FILTER,
                payload: e.target.value,
              });
            }}
          />
          LOW
        </label>
      </div>
      <div className="flex-col gap-btwn">
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
                  checked={filterState.tags.includes(label)}
                  onChange={() => {
                    filterDispatcher({
                      type: TAGS_FILTER,
                      payload: label,
                    });
                  }}
                />
                {label}
              </label>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};
