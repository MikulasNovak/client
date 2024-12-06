import React, { useState, useContext } from "react";
import "../../App.css";
import Modal from "../../components/modal/Modal";
import { ListContext } from "../../providers/ListProvider";
import { UserContext } from "../../providers/UserProvider";

function AddMemberModal({ isModalOpen, closeModal }) {
  const { handlerMap, listId } = useContext(ListContext);
  const { userData } = useContext(UserContext);
  const [selectedUserId, setSelectedUserId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handlerMap.handleAddMember(listId, Number(selectedUserId));
    setSelectedUserId("");
    closeModal();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      closeModal={closeModal}
      title="Add Member"
      handleSubmit={handleSubmit}
    >
      <div>
        <select
          id="userSelect"
          name="userSelect"
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a user
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
