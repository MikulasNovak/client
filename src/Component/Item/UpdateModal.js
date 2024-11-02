import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../Modal";
import { ItemContext } from "../../Provider/ItemProvider";

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
    <Modal isOpen={isModalOpen} closeModal={closeModal} title="Update item">
      <form onSubmit={handleSubmit} className="itemForm">
        <div>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            defaultValue={values.title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="modalFormButtons">
          <button type="button" onClick={closeModal}>
            Close
          </button>
          <button type="submit" variant="primary">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ItemUpdateModal;
