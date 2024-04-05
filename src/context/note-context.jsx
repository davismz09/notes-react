/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {createContext, useState, useEffect} from "react";
export const NoteContext = createContext();

export function NoteContextProvider({children}) {
  const [notes, setNotes] = useState(
    () => JSON.parse(window.localStorage.getItem("Notes")) ?? [],
  );

  const saveNotes = () => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  };

  useEffect(() => {
    saveNotes();
  }, [notes.length]);

  const addNote = (noteAdd) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: prevNotes.length,
          title: noteAdd.title,
          description: noteAdd.description,
        },
      ];
    });
  };

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
        return {...note};
      }),
    );
    saveNotes();
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        editNote,
        deleteNote,
      }}>
      {children}
    </NoteContext.Provider>
  );
}
