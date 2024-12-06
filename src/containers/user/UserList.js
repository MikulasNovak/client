import UserCard from "./UserCard";
import "../../assets/styles/user.css";
import { useContext } from "react";
import { ListContext } from "../../providers/ListProvider";
import { UserContext } from "../../providers/UserProvider";
import Button from "../../components/button/Button";

function UserList() {
  const { userDataFiltered, handlerMap, listId } = useContext(ListContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="userList">
      <div>
        <h2 className="userListTitle">Members</h2>
        <div>
          <Button
            className="userListLeaveList"
            onClick={(e) => handlerMap.handleLeave(listId, loggedInUser)}
            buttonText={"Leave"}
          />
        </div>
      </div>
      <div>
        {userDataFiltered.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
