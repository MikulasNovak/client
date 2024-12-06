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
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title="Delete list"
      handleSubmit={handleSubmit}
    ></Modal>
  );
}

export default ListDeleteModal;
