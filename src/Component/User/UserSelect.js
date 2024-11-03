// CategoryList.js
import React, { useContext, useState } from "react";
import { UserContext } from "../../Provider/UserProvider";

function UserSelect() {
  const { userData, setLoggedInUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState();

  const handleUserChange = (event) => {
    const userId = Number(event.target.value);
    setSelectedUser(userId);
    setLoggedInUser(userId);
    console.log("User selected and logged in:", userId);
  };

  return (
    <div className="userSelect">
      <select
        name="user"
        id="user"
        onChange={handleUserChange}
        value={selectedUser || ""}
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
  );
}

export default UserSelect;
