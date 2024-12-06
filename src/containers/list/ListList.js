import ListCard from "../../containers/list/ListCard";
import { useContext } from "react";
import "./../../assets/styles/list.css";
import { ListContext } from "../../providers/ListProvider";

function UserList() {
  const { listDataFiltered } = useContext(ListContext);
  return (
    <div className="listList">
      {listDataFiltered.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </div>
  );
}

export default UserList;
