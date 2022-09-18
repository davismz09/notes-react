import { createContext, useState } from "react";
export const NoteContext = createContext();

export function NoteContextProvider({ children }) {
  const [notes, setNotes] = useState([]);

  function addNote(noteAdd) {
    setNotes([
      ...notes.map((note, index) => {
        return {
          ...note,
          id: index,
        };
      }),
      {
        id: notes.length,
        title: noteAdd.title,
        description: noteAdd.description,
      },
    ]);
  }

  const deleteNote = (noteId) => {
    notes.splice(noteId, 1);

    setNotes([
      ...notes.map((note, index) => {
        return {
          ...note,
          id: index,
        };
      }),
    ]);
  };

  const editNote = (noteEdit) => {
    setNotes(
      notes.map((note) => {
        if (note.id === noteEdit.id) {
          return {
            ...note,
            title: noteEdit.title,
            description: noteEdit.description,
          };
        }
        return { ...note };
      }),
    );
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        editNote,
        deleteNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}
