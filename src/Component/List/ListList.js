import ListCard from "./ListCard";
import { useContext } from "react";
import { ListContext } from "../../Provider/ListProvider";

function UserList() {
    const { listDataFiltered, handlerMap } = useContext(ListContext);
    return (
        <div className="listList">
            {listDataFiltered.map((list) => (
                <ListCard key={list.id} list={list} />
            ))}
        </div>
    );
}

export default UserList;
