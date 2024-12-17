import "../../assets/styles/global.css";
import Button from "../button/Button";

function Modal({
  isOpen,
  closeModal,
  children,
  title,
  handleSubmit,
  isLoading,
}) {
  return (
    <>
      {isOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <h3 className="modalTitle">{title}</h3>
              <i className="fa-solid fa-x" onClick={closeModal}></i>
            </div>
            <form onSubmit={handleSubmit} className="modalForm">
              {children}
              <div className="modalButtons">
                <Button
                  type="submit"
                  buttonText={isLoading ? "Saving..." : "Save"}
                  className="modalSave"
                  disabled={isLoading} // Disable button when loading
                />
                <Button
                  onClick={closeModal}
                  buttonText={"Close"}
                  className="modalClose"
                  disabled={isLoading} // Optionally disable Close when saving
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
