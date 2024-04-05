import {useState, useContext} from "react";
import {NoteContext} from "../../context/note-context";

import "./style.css";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {addNote} = useContext(NoteContext);

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
      addNote({title, description});

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
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        id='textArea'
        name='description'
        className='notes__text notes__textArea'
        cols='50'
        rows='10'
        placeholder='Nota'
        autoCapitalize='sentences'
        onChange={(e) => setDescription(e.target.value)}
        value={description}></textarea>
      <button id='button' className='notes__submit'>
        Guardar
      </button>
    </form>
  );
}

export default Form;
