import React, { useContext } from "react";
import { NoteContext } from "../../context/NoteContext.jsx";
import "./style.css";
function Note({ id, title, description, index }) {
  const { deleteNote } = useContext(NoteContext);
  let counter = index + 1;
  return (
    <article className='note'>
      <h4>
        {counter}. {title}
      </h4>
      <p>{description}</p>
      <button
        onClick={() => {
          deleteNote(id);
        }}
        className='button-delete'
      >
        Eliminar
      </button>
      <button className='button-edit'>Editar</button>
    </article>
  );
}

export default Note;
