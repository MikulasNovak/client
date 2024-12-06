import React, { useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ListContext } from "../../providers/ListProvider";

function ListDeleteModal({ isModalOpen, closeModal, values }) {
  const { handlerMap } = useContext(ListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handlerMap.handleDelete(values.id);
    closeModal();
  };

  return (
    <Modal isOpen={isModalOpen} closeModal={closeModal} title="Create list">
      <form onSubmit={handleSubmit} className="itemForm">
        <div className="modalFormButtons">
          <button type="button" onClick={closeModal}>
            Close
          </button>
          <button type="submit" variant="primary">
            Delete
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ListDeleteModal;
