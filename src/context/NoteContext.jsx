import { createContext, useState, useEffect } from "react";
import { notes as data } from "../data/data.js";
export const NoteContext = createContext();

export function NoteContextProvider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(data);
  }, []);

  function addNote(note) {
    setNotes([
      ...notes,
      {
        title: note.title,
        id: notes.length,
        description: note.description,
      },
    ]);
  }
  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
