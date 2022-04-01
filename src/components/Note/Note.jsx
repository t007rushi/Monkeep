import React from "react";
import { useNotes } from "../../context/notes-context";
import "./note.css";
import { FiTrash2 } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineColorLens } from "react-icons/md";
import Masonry from "react-masonry-css";

export const Note = () => {
  const { note, removeFromnote } = useNotes();
  return (
    <div className="note-collection">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {note.map((item) => {
          return (
            <div className="note" key={item._id}>
              <div>{item.NoteContent.title}</div>
              <div
                className="note-descr"
                dangerouslySetInnerHTML={{
                  __html: item.NoteContent.description,
                }}
              />
              <div className="flex-row note-options-set">
                <MdOutlineColorLens onClick={() => {}} />
                <RiInboxArchiveLine onClick={() => {}} />
                <FiTrash2 onClick={() => removeFromnote(item._id)} />
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};
