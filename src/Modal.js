function Modal({ isOpen, closeModal, children, title }) {
  return (
    <>
      {isOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div>
              <h3>{title}</h3>
              <i className="fa-solid fa-x"></i>
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
