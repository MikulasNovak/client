import React, { useState, useCallback, useContext } from "react";
import ItemCreateModal from "../item/CreateModal";
import AddMemberModal from "../list/AddMemberModal";
import "../../assets/styles/toolbar.css";
import { ListContext } from "../../providers/ListProvider";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";

function DetailToolbar() {
  const { handlerMap, listData } = useContext(ListContext);
  const navigate = useNavigate();
  const { id } = useParams();

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
  const currentList = listData.find((list) => list.id === Number(id));

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

  let archivedColor;
  let color;
  switch (true) {
    case currentList.archived:
      archivedColor = "#006DD6";
      color = "#FFFFFF";
      break;
    case !currentList.archived:
      archivedColor = "#FFFFFF";
      color = "#000000";
      break;
    default:
      archivedColor = "#FFFFFF";
      color = "#000000";
      break;
  }

  return (
    <div className="detailToolbar">
      <div>
        <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
        {isEditing ? (
          <form onSubmit={handleEditListName} className="editListNameForm">
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              required
              autoFocus
            />
            <Button
              type="submit"
              style={{ display: "none" }}
              buttonText={"Save"}
            />
            <Button
              type="button"
              onClick={() => setIsEditing(false)}
              buttonText={"Cancel"}
            />
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

        <div className="detailToolbarButtons">
          <Button
            className="detailToolbarArchiveList hidden"
            onClick={(e) => handlerMap.handleArchive(currentList.id)}
            style={{ backgroundColor: archivedColor, color: color }}
            buttonText={"Archive list"}
          />

          <Button
            className="detailToolbarAddMember hidden"
            onClick={() => setIsModalAddMemberOpen(true)}
            buttonText={"Add member"}
          />

          <Button
            className="detailToolbarDeleteList hidden"
            buttonText={"Delete button"}
          />

          <Button
            className="detailToolbarAddItem"
            onClick={() => setIsModalItemCreateOpen(true)}
            buttonText={"Add item"}
          />
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
