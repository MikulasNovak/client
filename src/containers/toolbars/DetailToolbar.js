import React, { useState, useCallback, useContext } from "react";
import ItemCreateModal from "../item/CreateModal";
import AddMemberModal from "../list/AddMemberModal";
import "../../assets/styles/toolbar.css";
import { ListContext } from "../../providers/ListProvider";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import UpdateLisModal from "../list/UpdateModal";

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

  const [isModalUpdateListOpen, setModalUpdateListOpen] = useState(false);
  const closeModalUpdateListOpen = useCallback(
    () => setModalUpdateListOpen(false),
    [setModalUpdateListOpen]
  );

  const currentList = listData.find((list) => list.id === Number(id));

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
        <h2 style={{ display: "inline" }}>{currentList.title}</h2>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => setModalUpdateListOpen(true)}
        ></i>
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
            buttonText={"Delete"}
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
      <UpdateLisModal
        closeModal={closeModalUpdateListOpen}
        isModalOpen={isModalUpdateListOpen}
        values={currentList}
      />
    </div>
  );
}

export default DetailToolbar;
