import { UserContext } from "../../Provider/UserProvider";
import "./../../App.css";
import React, { useContext } from "react";

function UserCard({ user }) {
  const { handlerMap } = useContext(UserContext);

  return (
    <div className="userCard">
      <div>
        <div></div>
        <h3>{user.username}</h3>
      </div>
      <div>
        <i
          className="fa-solid fa-x"
          onClick={(e) => handlerMap.handleKick(user.id)}
        ></i>
      </div>
    </div>
  );
}

export default UserCard;
