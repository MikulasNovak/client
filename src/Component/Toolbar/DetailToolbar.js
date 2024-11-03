import React, { useState, useCallback, useContext } from "react";
import ItemCreateModal from "../Item/CreateModal";
import "../../App.css";

function DetailToolbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return (
    <div className="listToolbar">
      <div>
        <i className="fa-solid fa-arrow-left"></i>
        <h2>List title</h2>
        <i className="fa-solid fa-pen-to-square hidden" onClick={openModal}></i>
      </div>
      <div>
        <div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="listToolbarButtons">
          <button className="archiveListButton hidden">Archive list</button>
          <button className="addMemberButton hidden">Add member</button>
          <button className="deleteListButton hidden">Delete List</button>
          <button className="addItemButton" onClick={openModal}>
            Add item
          </button>
        </div>
      </div>

      <ItemCreateModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </div>
  );
}

export default DetailToolbar;
