import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ItemContext } from "../../providers/ItemProvider";

function ItemCreateModal({ isModalOpen, closeModal }) {
  const { handlerMap } = useContext(ItemContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handlerMap.handleCreate(title);
    setTitle("");
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title="Create item"
      className="createItemModal"
      handleSubmit={handleSubmit}
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
