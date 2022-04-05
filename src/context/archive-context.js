import { createContext, useContext, useState, useEffect } from "react";
import {
  addToArchiveService,
  deleteFromArchivesService,
  getArchivedNotes,
  restoreFromArchivesService,
} from "../services";
import { useAuth } from "./auth-context";
import { useNotes } from "./notes-context";

const ArchiveContext = createContext();
const ArchiveProvider = ({ children }) => {
  const [archive, setArchive] = useState([]);
  const { user } = useAuth();
  const { setNote } = useNotes();

  //GET archive note Items
  useEffect(() => {
    if (user.isUserLoggedIn) {
      (async () => {
        const data = await getArchivedNotes(user);
        if (data !== undefined) {
          setArchive(data.archives);
        }
      })();
    } else {
      setArchive([]);
    }
  }, [user]);

  //ADD TO archives
  const addToArchive = async (Note, _id) => {
    const archivednote = await addToArchiveService(Note, _id, user);
    if (archivednote !== undefined) {
      setArchive(archivednote.archives);
      setNote(archivednote.notes);
    }
  };

  //RESTORE NOTE
  const restoreToArchive = async (_id) => {
    const archivednote = await restoreFromArchivesService(_id, user);
    if (archivednote !== undefined) {
      setArchive(archivednote.archives);
      setNote(archivednote.notes);
    }
  };

  //DELETE FROM ARCHIVES
  const deleteToArchive = async (_id) => {
    const archivednote = await deleteFromArchivesService(_id, user);
    if (archivednote !== undefined) {
      setArchive(archivednote.archives);
    }
  };

  return (
    <ArchiveContext.Provider
      value={{ archive, addToArchive, restoreToArchive, deleteToArchive }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => {
  const context = useContext(ArchiveContext);
  if (context === undefined) {
    throw new Error("useContext must be used inside ArchiveProvider");
  }
  return context;
};

export { ArchiveProvider, useArchive };
