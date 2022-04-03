import React from "react";
import { Note } from "../../components/index";
import { useArchive } from "../../context/archive-context";
import "./archive.css";

export const ArchivesPage = () => {
  const { archive } = useArchive();
  return (
    <div className="archived">
      {archive.length === 0 ? (
        <h1>Your archived Notes Appear here</h1>
      ) : (
        <Note arr={archive} heading={<h4>ARCHIVED</h4>} />
      )}
    </div>
  );
};
