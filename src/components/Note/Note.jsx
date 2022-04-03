import React from "react";
import "./note.css";
import { useNotes } from "../../context/notes-context";
import { FiTrash2 } from "react-icons/fi";
import { RiInboxArchiveLine, RiInboxUnarchiveLine } from "react-icons/ri";
import { BsFillPinFill, BsPin } from "react-icons/bs";
import { MdRestoreFromTrash, MdDeleteForever } from "react-icons/md";
import Masonry from "react-masonry-css";
import Colorpalette from "../color/Colorpalette";
import { useArchive } from "../../context/archive-context";
import { useLocation } from "react-router-dom";

const breakpointColumnsObj = {
  default: 4,
  1500: 3,
  1000: 2,
  600: 1,
};

export const Note = ({ arr, heading }) => {
  const { togglePin, Change_color, inTrash } = useNotes();
  const { addToArchive, restoreToArchive, deleteToArchive } = useArchive();
  const { pathname } = useLocation();
  return (
    <div className="note-collection">
      {arr.length !== 0 && heading}
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
                {pathname === "/notes" && (
                  <Colorpalette
                    updateColor={(color) => Change_color(Note, _id, color)}
                  />
                )}
                {pathname === "/notes" && (
                  <RiInboxArchiveLine
                    onClick={() => {
                      addToArchive(Note, _id);
                    }}
                  />
                )}
                {pathname === "/archives" && (
                  <RiInboxUnarchiveLine
                    onClick={() => {
                      restoreToArchive(_id);
                    }}
                  />
                )}
                {pathname === "/trash" && (
                  <MdRestoreFromTrash onClick={() => {}} />
                )}
                {pathname === "/archives" && (
                  <MdDeleteForever
                    onClick={() =>
                      deleteToArchive(_id)
                    }
                  />
                )}
                {pathname === "/notes" && (
                  <FiTrash2 onClick={() => inTrash(Note, _id)} />
                )}
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};
