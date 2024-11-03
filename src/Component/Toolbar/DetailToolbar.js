import React, { useState, useCallback, useContext } from "react";
import ItemCreateModal from "../Item/CreateModal";
import AddMemberModal from "../List/AddMemberModal";
import "../../App.css";
import { ListContext } from "../../Provider/ListProvider";

function DetailToolbar() {
  const { handlerMap, listData } = useContext(ListContext);
  const [isModalItemCreateOpen, setIsModalItemCreateOpen] = useState(false);
  const closeModalItemCreate = useCallback(
    () => setIsModalItemCreateOpen(false),
    [setIsModalItemCreateOpen]
  );

  const [isModalAddMemberOpen, setIsModalAddMemberOpen] = useState(false);
  const closeModalAddMember = useCallback(
    () => setIsModalAddMemberOpen(false),
    [setIsModalAddMemberOpen]
  );

  const [isEditing, setIsEditing] = useState(false);
  const [newListName, setNewListName] = useState("");

  const currentList = listData[0];

  const handleEditListName = (e) => {
    e.preventDefault();
    if (newListName.trim()) {
      handlerMap.handleEditListName(currentList.id, newListName);
      setNewListName("");
    }
    setIsEditing(false);
  };

  const openEditMode = () => {
    setNewListName(currentList.title);
    setIsEditing(true);
  };

  return (
    <div className="listToolbar">
      <div>
        <i className="fa-solid fa-arrow-left"></i>
        {isEditing ? (
          <form onSubmit={handleEditListName} className="editListNameForm">
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              required
              autoFocus
            />
            <button type="submit" style={{ display: "none" }}>
              Save
            </button>{" "}
            {/* Hide submit button */}
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <h2>{currentList.title}</h2>
        )}
        <i className="fa-solid fa-pen-to-square" onClick={openEditMode}></i>
      </div>
      <div>
        <div>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="listToolbarButtons">
          <button
            className="archiveListButton hidden"
            onClick={(e) => handlerMap.handleArchive(currentList.id)}
          >
            Archive list
          </button>
          <button
            className="addMemberButton hidden"
            onClick={() => setIsModalAddMemberOpen(true)}
          >
            Add member
          </button>
          <button className="deleteListButton hidden">Delete List</button>
          <button
            className="addItemButton"
            onClick={() => setIsModalItemCreateOpen(true)}
          >
            Add item
          </button>
        </div>
      </div>

      <ItemCreateModal
        closeModal={closeModalItemCreate}
        isModalOpen={isModalItemCreateOpen}
      />

      <AddMemberModal
        closeModal={closeModalAddMember}
        isModalOpen={isModalAddMemberOpen}
      />
    </div>
  );
}

export default DetailToolbar;
