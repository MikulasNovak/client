import "../../assets/styles/global.css";
import Button from "../button/Button";
import Loader from "../loader/Loader";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function Modal({
  isOpen,
  closeModal,
  children,
  title,
  handleSubmit,
  isLoading,
}) {
  const { t } = useTranslation(); // Get translation function

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
                  buttonText={isLoading ? <Loader /> : t("buttons.save")} // Use translation for save button
                  className="modalSave"
                  disabled={isLoading}
                />
                <Button
                  onClick={closeModal}
                  buttonText={t("buttons.close")} // Use translation for close button
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
