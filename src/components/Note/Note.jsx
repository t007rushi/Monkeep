import React from "react";
import "./note.css";
import Masonry from "react-masonry-css";
import { NoteCard } from "../NoteCard/NoteCard";

const breakpointColumnsObj = {
  default: 4,
  1500: 3,
  1000: 2,
  600: 1,
};

export const Note = ({ arr, heading }) => {
  
  return (
    <div className="note-collection">
      {arr.length !== 0 && heading}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {arr.map(({ _id, Note }) => 
              <NoteCard key ={_id} Note={Note} id={_id} />
              )}
      </Masonry>
    </div>
  );
};
