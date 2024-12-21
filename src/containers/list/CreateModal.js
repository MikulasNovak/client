import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ListContext } from "../../providers/ListProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function ItemCreateModal({ isModalOpen, closeModal }) {
  const { handlerMap } = useContext(ListContext);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handlerMap.handleCreate(title);
      setIsLoading(false);
      closeModal();
    }, 2000);
  };
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      title={t("titles.addListModal")}
      isLoading={isLoading}
    >
      <div>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          className="modalInput"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
    </Modal>
  );
}

export default ItemCreateModal;
