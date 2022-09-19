import React, { useContext } from "react";
import "./style.css";

import { NoteContext } from "../../context/NoteContext";
import Note from "../Note/Note";

function NoteList() {
  const { notes } = useContext(NoteContext);
  return (
    <section id='section' className='notes__save'>
      <h2 className='notes__save-title'>Lista de notas</h2>
      {notes.length === 0 ? (
        <p id='textNotes' className='notes__save-paragraph'>
          No se ha creado ninguna tarea
        </p>
      ) : (
        notes.map(({ title, description, id }, index) => {
          let noteId = index;
          return (
            <Note
              key={index}
              index={index}
              id={noteId}
              title={title}
              description={description}
            />
          );
        })
      )}
    </section>
  );
}

export default NoteList;
