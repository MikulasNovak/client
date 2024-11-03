import { UserContext } from "../../Provider/UserProvider";
import "./../../App.css";
import React, { useContext } from "react";
import { ListContext } from "../../Provider/ListProvider";

function UserCard({ user }) {
  const { handlerMap, loggedInUser } = useContext(UserContext);
  const { listData } = useContext(ListContext);

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
