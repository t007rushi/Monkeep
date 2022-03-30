import { createContext, useContext, useState } from "react";
import { useAuth } from "./auth-context";
import { useEffect } from "react";
import {
  getNotes,
  addNotesService,
    removeFromNotesService,
} from "../services";

const notesContext = createContext();

const NotesProvider = ({ children }) => {
  const [note, setNote] = useState([]);
  const { user } = useAuth();

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
  const addNotes = async (NoteContent) => {
    const newnote = await addNotesService(NoteContent, user);
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

  return (
    <notesContext.Provider
      value={{
        note,
        addNotes,
        removeFromnote
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
