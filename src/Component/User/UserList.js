import UserCard from "./UserCard";
import { useContext } from "react";
import { ListContext } from "../../Provider/ListProvider";
import { UserContext } from "../../Provider/UserProvider";

function UserList() {
  const { userDataFiltered, handlerMap, listId } = useContext(ListContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="userList">
      <div>
        <h2>Members</h2>
        <div>
          <button
            className="leaveListButton"
            onClick={(e) => handlerMap.handleLeave(listId, loggedInUser)}
          >
            Leave
          </button>
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
