import UserCard from "./UserCard";
import "../../assets/styles/user.css";
import { useContext } from "react";
import { ListContext } from "../../providers/ListProvider";
import { UserContext } from "../../providers/UserProvider";
import Button from "../../components/button/Button";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function UserList() {
  const { userDataFiltered, handlerMap, listId } = useContext(ListContext);
  const { loggedInUser } = useContext(UserContext);
  const { t, i18n } = useTranslation();

  return (
    <div className="userList">
      <div>
        <h2 className="userListTitle">{t(`containers.memberList`)}</h2>
        <div>
          <Button
            className="userListLeaveList"
            onClick={(e) => handlerMap.handleLeave(listId, loggedInUser)}
            buttonText={t(`buttons.leaveList`)}
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
