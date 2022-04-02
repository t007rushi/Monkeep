import React from "react";
import "./note.css";
import { useNotes } from "../../context/notes-context";
import { FiTrash2 } from "react-icons/fi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BsFillPinFill, BsPin } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Colorpalette from "../color/Colorpalette";

const breakpointColumnsObj = {
  default: 4,
  1500: 3,
  1000: 2,
  600: 1,
};

export const Note = ({ arr, heading }) => {
  const { removeFromnote, togglePin, Change_color } = useNotes();

  return (
    <div className="note-collection">
      {heading}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {arr.map(({ _id, Note }) => {
          return (
            <div className={`note ${Note.color}`} key={_id}>
              <div className="flex-row spc-btwn">
                <div>{Note.title}</div>
                <button
                  className="note-pin"
                  type="button"
                  onClick={() => {
                    togglePin(Note, _id);
                  }}
                >
                  {Note.ispin ? <BsFillPinFill /> : <BsPin />}
                </button>
              </div>

              <div
                className="note-descr"
                dangerouslySetInnerHTML={{
                  __html: Note.description,
                }}
              />
              <div className="flex-row note-options-set">
                <Colorpalette
                  color={Note.color}
                  updateColor={(color) => Change_color(Note, _id, color)}
                />
                <RiInboxArchiveLine onClick={() => {}} />
                <FiTrash2 onClick={() => removeFromnote(_id)} />
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};
