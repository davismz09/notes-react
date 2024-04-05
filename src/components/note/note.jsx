import {useContext} from "react";
import {NoteContext} from "../../context/note-context.jsx";
import "./style.css";

import {Modal} from "../form/modal.jsx";
import {NoteModal} from "../form/note-modal.jsx";
import {useModal} from "../../hooks/use-modal.js";

// eslint-disable-next-line react/prop-types
function Note({id, title, description}) {
  const {deleteNote} = useContext(NoteContext);

  const {isOpen, openModal, closeModal} = useModal(false);

  return (
    <article className='note'>
      <h4>
        {id + 1}. {title}
      </h4>
      <p>{description}</p>
      <button
        className='mt-2 mr-3 shadow-sm p-1 rounded-md bg-white hover:bg-red-400 text-black hover:text-white text-sm'
        type='submit'
        onClick={() => {
          deleteNote(id);
        }}>
        Eliminar
      </button>
      <button
        className='mt-2 mr-3 shadow-sm p-1 rounded-md bg-white hover:bg-slate-800 text-black hover:text-white text-sm'
        type='button'
        onClick={() => {
          openModal();
        }}>
        Editar
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <NoteModal closeModal={closeModal} note={{title, description, id}} />
      </Modal>
    </article>
  );
}

export default Note;
