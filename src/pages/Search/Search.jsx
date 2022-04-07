import React from "react";
import "./search.css"
import { Filter, Note } from "../../components/index";
import { useFilter } from "../../context/filter-context";
import { useHeader } from "../../context/header-context";
import { useNotes } from "../../context/notes-context";
import { composeFilterFunctions, filterbyLabels, filterbyPriority, sortbydate } from "../../utils";

export const Search = () => {
  const { showFilter } = useHeader();
  const { note } = useNotes();
  const { filterState } = useFilter();
  const filteredNotes = composeFilterFunctions(
    filterState,
    filterbyLabels,
    sortbydate,
    filterbyPriority
  )(note);

  return (
    <div className="search-page">
      {showFilter && <Filter />}
      <Note arr={filteredNotes} heading={<h4>Results</h4>} />
    </div>
  );
};
