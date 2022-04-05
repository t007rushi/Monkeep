import React from "react";
import { useParams } from "react-router-dom";
import { Note } from "../../components/index";
import { useNotes } from "../../context/notes-context";

export const LabelsPage = () => {
  const { label } = useParams();
  const { note } = useNotes();
  const LabelsArr = note?note.filter((item) => item.Note.labels.includes(label) && !item.Note.inTrash):[];

  return (
    <div className="trash">
      {LabelsArr.length === 0 ? (
        <h1>No Notes In This Label</h1>
      ) : (
        <Note
          arr={LabelsArr}
          heading={<h4>{label.toUpperCase()} Labeled ones</h4>}
        />
      )}
    </div>
  );
};
