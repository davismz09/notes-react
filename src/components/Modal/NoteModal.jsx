import { useState, useContext } from "react";
import { NoteContext } from "../../context/NoteContext.jsx";

export const NoteModal = ({ closeModal, note }) => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const { editNote, notes } = useContext(NoteContext);

  const isValid = () => {
    return title !== "" || description !== "";
  };
  let isValido = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValido) {
      editNote({
        title: title === "" ? notes[note.id].title : title,
        description:
          description === "" ? notes[note.id].description : description,
        id: note.id,
      });
    }
  };

  return (
    <form className='grid grid-flow-row rounded-md' onSubmit={handleSubmit}>
      <label>Titulo de la nota:</label>
      <input
        className='w-full shadow-lg mb-3 rounded-md p-2 outline-slate-700'
        type='text'
        value={notes[note.id].title}
        onChange={(e) => {
          notes[note.id].title = e.target.value;
          setTitle(notes[note.id].title);
        }}
      />
      <label>Descripcion de la nota</label>
      <textarea
        className='w-full shadow-lg mb-3 rounded-md p-2 outline-slate-700'
        cols='20'
        rows='5'
        value={notes[note.id].description}
        onChange={(e) => {
          notes[note.id].description = e.target.value;
          setDescription(notes[note.id].description);
        }}
      ></textarea>
      <button
        className='max-w-max shadow-lg  hover:bg-green-600 p-1 rounded-md hover:text-white'
        onClick={() => {
          if (isValid()) {
            closeModal();
            isValido = true;
            return;
          }
          isValido = false;
          alert(
            "La nota no ha sido editada. Si no desea editarla, puede darle a la 'X' de arriba",
          );
        }}
      >
        Guardar nota
      </button>
    </form>
  );
};
