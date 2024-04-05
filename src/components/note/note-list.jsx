import {useContext} from "react";
import {NoteContext} from "../../context/note-context.jsx";
import Note from "./note.jsx";
import "./style.css";

function NoteList() {
  const {notes} = useContext(NoteContext);
  return (
    <section id='section' className='notes__save'>
      <h2 className='notes__save-title'>Lista de notas</h2>
      {notes.length === 0 ? (
        <p id='textNotes' className='notes__save-paragraph'>
          No se ha creado ninguna tarea
        </p>
      ) : (
        notes.map(({title, description}, index) => {
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
