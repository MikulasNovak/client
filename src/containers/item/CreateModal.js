import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ItemContext } from "../../providers/ItemProvider";

function ItemCreateModal({ isModalOpen, closeModal }) {
  const { handlerMap } = useContext(ItemContext);
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

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title="Create item"
      className="createItemModal"
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <div>
        <input
          className="modalInput"
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
    </Modal>
  );
}

export default ItemCreateModal;
