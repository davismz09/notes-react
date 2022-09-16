import React, { useState, useContext } from "react";
import { NoteContext } from "../../context/NoteContext";

import "./style.css";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { addNote } = useContext(NoteContext);

  const reset = () => {
    setTitle("");
    setDescription("");
  };

  const isValid = () => {
    return title !== "" && description !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      addNote({ title, description });
      reset();
      return;
    }
    alert("Rellena los campo correctamente");
  };

  return (
    <form action='' className='notes__form' onSubmit={handleSubmit}>
      <h2 className='notes__title'>Registrar Nota</h2>
      <input
        name='title'
        id='input'
        className='notes__text notes__input'
        placeholder='Título'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id='textArea'
        name='description'
        className='notes__text notes__textArea'
        cols='50'
        rows='10'
        value={description}
        placeholder='Nota'
        autoCapitalize='sentences'
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button id='button' className='notes__submit'>
        Guardar
      </button>
    </form>
  );
}

export default Form;
