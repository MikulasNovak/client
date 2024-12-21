import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import UserSelect from "../user/UserSelect";
import { ListContext } from "../../providers/ListProvider";
import { UserContext } from "../../providers/UserProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function AddMemberModal({ isModalOpen, closeModal }) {
  const { handlerMap, listId } = useContext(ListContext);
  const { userData } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      handlerMap.handleAddMember(listId, Number(selectedUserId));
      setIsLoading(false);
      closeModal();
    }, 2000);
  };
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title={t("titles.addMemberModal")}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <div>
        <select
          id="userSelect"
          name="userSelect"
          value={selectedUserId}
          className="modalInput"
          onChange={(e) => setSelectedUserId(e.target.value)}
          required
        >
          <option value="" disabled>
            {t("select.selectUserDef")}
          </option>
          {userData.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
    </Modal>
  );
}

export default AddMemberModal;
