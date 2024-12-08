import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ListContext } from "../../providers/ListProvider";

function ItemCreateModal({ isModalOpen, closeModal }) {
  const { handlerMap } = useContext(ListContext);
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
      handleSubmit={handleSubmit}
      title="Create list"
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
