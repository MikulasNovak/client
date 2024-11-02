import React, { useState, useCallback, useContext } from "react";
import ItemCreateModal from "../Item/CreateModal";

function DetailToolbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return (
    <div className="listToolbar">
      <div>
        <i className="fa-solid fa-arrow-left"></i>
        <h2>List title</h2>
      </div>
      <div>
        <i className="fa-solid fa-ellipsis"></i>

        <button className="addItemButton" onClick={openModal}>
          Add item
        </button>
      </div>

      <ItemCreateModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </div>
  );
}

export default DetailToolbar;
