import UserCard from "./UserCard";
import { useContext } from "react";
import { UserContext } from "../../Provider/UserProvider";
import { ListContext } from "../../Provider/ListProvider";

function UserList() {
  const { data, handlerMap } = useContext(UserContext);

  return (
    <div className="userList">
      <div>
        <h2>Members</h2>
        <div>
          <button className="leaveListButton">Leave</button>
        </div>
      </div>
      <div>
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
