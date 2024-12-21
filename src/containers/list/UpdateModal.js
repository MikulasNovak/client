import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ListContext } from "../../providers/ListProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function ItemCreateModal({ isModalOpen, closeModal, values }) {
  const { handlerMap } = useContext(ListContext);
  const [title, setTitle] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    handlerMap.handleEditListName(values.id, title);
    setTitle("");
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      title={t("titles.updateListModal")}
    >
      <div>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={values.title}
          className="modalInput"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </Modal>
  );
}

export default ItemCreateModal;
