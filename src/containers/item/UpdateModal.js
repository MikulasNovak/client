import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ItemContext } from "../../providers/ItemProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function ItemUpdateModal({ isModalOpen, closeModal, values }) {
  const { handlerMap } = useContext(ItemContext);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handlerMap.handleUpdate(values.id, title);
      setIsLoading(false);
      closeModal();
    }, 2000);
  };
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title={t("titles.updateItemModal")}
      className="updateItemModal"
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <div>
        <input
          type="text"
          id="title"
          name="title"
          className="modalInput"
          placeholder="Title"
          defaultValue={values.title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
    </Modal>
  );
}

export default ItemUpdateModal;
