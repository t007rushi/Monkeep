import React, { useState } from "react";
import { useNotes } from "../../context/notes-context";
import { FiTrash2 } from "react-icons/fi";
import { RiInboxArchiveLine, RiInboxUnarchiveLine } from "react-icons/ri";
import { BsFillPinFill, BsPin } from "react-icons/bs";
import {
  MdRestoreFromTrash,
  MdDeleteForever,
  MdOutlineEdit,
} from "react-icons/md";
import Colorpalette from "../color/Colorpalette";
import { useArchive } from "../../context/archive-context";
import { matchPath, useLocation } from "react-router-dom";
import { Label } from "../Label/Label";
import { EditorModal } from "../EditorModal/EditorModal";

export const NoteCard = ({ Note, id }) => {
  const { togglePin, Change_color, inTrash, removeFromnote, tagUpdate } =
    useNotes();
  const { addToArchive, restoreToArchive, deleteToArchive } = useArchive();
  const { pathname } = useLocation();
  const [modal, showModal] = useState(false);

  return (
    <div className={`note ${Note.color}`} key={id}>
      {modal && (
        <EditorModal id={id} currentNote={Note} showModal={showModal} />
      )}
      <div className="flex-row spc-btwn">
        <div>{Note.title}</div>
        <button
          className="note-pin"
          type="button"
          onClick={() => {
            togglePin(Note, id);
          }}
        >
          {(pathname === "/notes" || pathname ==="/search" || matchPath("/labels/*", pathname)) &&
            (Note.ispin ? <BsFillPinFill /> : <BsPin />)}
        </button>
      </div>

      <div
        className="note-descr"
        dangerouslySetInnerHTML={{
          __html: Note.description,
        }}
      />
      <div className="flex-row gap-btwn">
        {Note.labels.map((label) => {
          return (
            <div key={label} className="flex-row label-wrap">
              <p>{label}</p>
              <span
                className="label-delete"
                onClick={() => tagUpdate(Note, id, label)}
              >
                x
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex-row note-options-set">
      <p className={Note.priority?"priority-tag":""}>{Note.priority}</p>
        {(pathname === "/notes" || pathname ==="/search" || matchPath("/labels/*", pathname)) && (
          <Label
            labels={Note.labels}
            addLabels={(tag) => {
              tagUpdate(Note, id, tag);
            }}
          />
        )}

        {(pathname === "/notes" || pathname ==="/search" || matchPath("/labels/*", pathname)) && (
          <Colorpalette
            updateColor={(color) => Change_color(Note, id, color)}
          />
        )}
        {(pathname === "/notes" || pathname ==="/search" || matchPath("/labels/*", pathname)) && (
          <RiInboxArchiveLine
            onClick={() => {
              addToArchive(Note, id);
            }}
          />
        )}

        {(pathname === "/notes" || pathname ==="/search" || matchPath("/labels/*", pathname)) && (
          <FiTrash2
            onClick={() => {
              inTrash(Note, id);
            }}
          />
        )}
        {pathname === "/archives" && (
          <RiInboxUnarchiveLine
            onClick={() => {
              restoreToArchive(id);
            }}
          />
        )}
        {pathname === "/archives" && (
          <MdDeleteForever onClick={() => deleteToArchive(id)} />
        )}
        {pathname === "/trash" && (
          <MdRestoreFromTrash
            onClick={() => {
              inTrash(Note, id);
            }}
          />
        )}
        {pathname === "/trash" && (
          <MdDeleteForever onClick={() => removeFromnote(id)} />
        )}
        {pathname !== "/trash" && (
          <MdOutlineEdit
            onClick={() => {
              showModal(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
