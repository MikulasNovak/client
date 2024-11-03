import { ListContext } from "../../Provider/ListProvider";
import "./../../App.css";
import React, { useContext } from "react";

function UserCard({ user }) {
  const { handlerMap } = useContext(ListContext);

  return (
    <div className="userCard">
      <div>
        <div></div>
        <h3>{user.username}</h3>
      </div>
      <div>
        <i
          className="fa-solid fa-x"
          onClick={(e) => handlerMap.handleKick(1, user.id)}
        ></i>
      </div>
    </div>
  );
}

export default UserCard;
