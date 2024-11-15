import "./../../App.css";
import { useContext } from "react";
import { ListContext } from "../../Provider/ListProvider";
import { useNavigate } from "react-router-dom"


function ListCard({ list }) {
    const { handlerMap } = useContext(ListContext);
    const navigate = useNavigate();
    return (
        <div className="listCard" onClick={() => navigate('list/' + list.id)}>
            <h3>{list.title}</h3>
        </div>
    );
}

export default ListCard;
