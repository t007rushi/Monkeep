import React from "react";
import { Filter } from "../../components/index";
import { useHeader } from "../../context/header-context";

export const Search = () => {
  const { showFilter } = useHeader();
  return (
    <div style={{ marginTop: "5rem" }}>
      <h1 style={{ color: "white" }}>Search</h1>
      {showFilter && <Filter />}
    </div>
  );
};
