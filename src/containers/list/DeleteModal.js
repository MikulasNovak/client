import React, { useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ListContext } from "../../providers/ListProvider";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function ListDeleteModal({ isModalOpen, closeModal, values }) {
  const { handlerMap } = useContext(ListContext);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading state first

    // Simulate async operation
    setTimeout(() => {
      handlerMap.handleDelete(values.id); // Perform delete operation
      //console.log("List deleted");
      setIsLoading(false); // Stop the loader
      closeModal(); // Close the modal AFTER loading completes
    }, 2000);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title={t("titles.deleteListModal") + `: ${values.title}`}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    ></Modal>
  );
}

export default ListDeleteModal;
