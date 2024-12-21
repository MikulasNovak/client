import React, { useState, useCallback, useContext } from "react";
import ItemCreateModal from "../item/CreateModal";
import AddMemberModal from "../list/AddMemberModal";
import "../../assets/styles/toolbar.css";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { ListContext } from "../../providers/ListProvider";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import UpdateLisModal from "../list/UpdateModal";

function DetailToolbar() {
  const { listData } = useContext(ListContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const { t } = useTranslation();

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

  return (
    <div className="detailToolbar">
      <div>
        <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
        <h2>{currentList.title}</h2>
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
            buttonText={t(`buttons.archiveList`)}
          />
          <Button
            className="detailToolbarAddMember hidden"
            onClick={() => setIsModalAddMemberOpen(true)}
            buttonText={t(`buttons.addMember`)}
          />
          <Button
            className="detailToolbarDeleteList hidden"
            buttonText={t(`buttons.deleteList`)}
          />
          <Button
            className="detailToolbarAddItem"
            onClick={() => setIsModalItemCreateOpen(true)}
            buttonText={t(`buttons.addItem`)}
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
