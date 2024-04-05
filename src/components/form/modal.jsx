import "./style.css";
// eslint-disable-next-line react/prop-types
export const Modal = ({children, isOpen, closeModal}) => {
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <section
      className={`modal ${isOpen && "is-open"} `}
      onClick={() => {
        closeModal();
      }}>
      <div
        className='modal-container bg-slate-500 rounded-md'
        onClick={handleModalClick}>
        <button
          onClick={closeModal}
          className='modal-close bg-slate-800 w-10 text-pink-50 rounded-tr-md rounded-bl-md hover:bg-red-400'>
          X
        </button>
        {children}
      </div>
    </section>
  );
};
