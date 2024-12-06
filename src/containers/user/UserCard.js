import { ListContext } from "../../providers/ListProvider";
import "./../../assets/styles/user.css";
import React, { useContext } from "react";
import Card from "../../components/card/Card";

function UserCard({ user }) {
  const { handlerMap, listId } = useContext(ListContext);

  return (
    <Card className="userCard">
      <div className="userCardUserInfo">
        <div className="userCardIcon"></div>
        <h3 className="userCardName">{user.username}</h3>
      </div>
      <div className="userCardAction">
        <i
          className="fa-solid fa-x"
          onClick={(e) => handlerMap.handleKick(listId, user.id)}
        ></i>
      </div>
    </Card>
  );
}

export default UserCard;
