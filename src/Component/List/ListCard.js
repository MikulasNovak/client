import "./../../App.css";
import { useContext, useState, useCallback } from "react";
import { ListContext } from "../../Provider/ListProvider";
import { useNavigate } from "react-router-dom";
import ListDeleteModal from "./DeleteModal";

function ListCard({ list }) {
  const { handlerMap } = useContext(ListContext);
  const navigate = useNavigate();

  const [isModalListDeleteOpen, setIsModalListDeleteOpen] = useState(false);
  const closeModalListDelete = useCallback(
    () => setIsModalListDeleteOpen(false),
    [setIsModalListDeleteOpen]
  );

  let archivedColor;
  switch (true) {
    case list.archived:
      archivedColor = "#006DD6";
      break;
    case !list.archived:
      archivedColor = "#5B5B5B";
      break;
    default:
      archivedColor = "#5B5B5B";
      break;
  }

  return (
    <div className="listCard" onClick={() => navigate("list/" + list.id)}>
      <div>
        <h3>{list.title}</h3>
        <i
          className="fa-solid fa-bookmark"
          onClick={(e) => {
            e.stopPropagation();
            handlerMap.handleArchive(list.id);
          }}
          style={{ color: archivedColor }}
        ></i>
      </div>
      <div>
        <button
          className="deleteListButton"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalListDeleteOpen(true);
          }}
        >
          Delete List
        </button>
      </div>

      <ListDeleteModal
        closeModal={closeModalListDelete}
        isModalOpen={isModalListDeleteOpen}
        values={list}
      />
    </div>
  );
}

export default ListCard;
