import { createContext, useContext, useState, useReducer } from "react";
import { useAuth } from "./auth-context";
import { useEffect } from "react";
import { getNotes, addNotesService, removeFromNotesService, updateNoteService } from "../services";
import { noteDetailReducer } from "../reducer/noteDetailReducer";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
  const [note, setNote] = useState("");
  const { user } = useAuth();

  const initialState = {
    title: "",
    priority: "",
    ispin: false,
    color: "default-color",
    inTrash:"false"
  };
  
  const [notesData, noteDispatcher] = useReducer(
    noteDetailReducer,
    initialState
  );

  //GET note Items
  useEffect(() => {
    if (user.isUserLoggedIn) {
      (async () => {
        const data = await getNotes(user);
        if (data !== undefined) {
          setNote(data.notes);
        }
      })();
    } else {
      setNote([]);
    }
  }, [user]);

  //ADD TO NOTES
  const addNotes = async (Note) => {

    const newnote = await addNotesService(Note, user);
    if (newnote !== undefined) {
      setNote(newnote.notes);
    }
  };

  //   REMOVE From NOTES
  const removeFromnote = async (id) => {
    const rmvnote = await removeFromNotesService(id, user);
    if (rmvnote !== undefined) {
      setNote(rmvnote.notes);
    }
  };

  // update note
  const updateNote = async (Note,id) => {
    const updatedNote = await updateNoteService(user, Note,id);
    if (updatedNote !== undefined) {
      setNote(updatedNote.notes);
    }
  };

  const togglePin = (noteP,id) => {
    updateNote({ ...noteP, ispin: !noteP.ispin },id);
  };

  const Change_color = (noteP,id,new_color) => {
    updateNote({ ...noteP, color: new_color },id);
  };


  const inTrash = (noteP,id) => {
    updateNote({ ...noteP, inTrash: !noteP.inTrash },id);
  };

  return (
    <notesContext.Provider
      value={{
        note,
        setNote,
        addNotes,
        removeFromnote,
        updateNote,
        notesData,
        noteDispatcher,
        initialState,
        togglePin,
        Change_color,
        inTrash
      }}
    >
      {children}
    </notesContext.Provider>
  );
};

const useNotes = () => {
  const context = useContext(notesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used inside NotesProvider");
  }
  return context;
};

export { useNotes, NotesProvider };
