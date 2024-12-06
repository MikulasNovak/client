import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ItemContext } from "../../providers/ItemProvider";

function ItemUpdateModal({ isModalOpen, closeModal, values }) {
  const { handlerMap } = useContext(ItemContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handlerMap.handleUpdate(values.id, title);
    setTitle("");
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title="Update item"
      className="updateItemModal"
      handleSubmit={handleSubmit}
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
