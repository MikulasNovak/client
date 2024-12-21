import "./../../assets/styles/list.css";
import { useContext, useState, useCallback } from "react";
import { ListContext } from "../../providers/ListProvider";
import { useNavigate } from "react-router-dom";
import ListDeleteModal from "./DeleteModal";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { ItemContext } from "../../providers/ItemProvider";
import LinearProgress from "@mui/material/LinearProgress";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function ListCard({ list }) {
  const { handlerMap } = useContext(ListContext);
  const { getProgress } = useContext(ItemContext);
  const { t } = useTranslation();

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
    <Card className="listCard" onClick={() => navigate("list/" + list.id)}>
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
      <LinearProgress
        variant="determinate"
        className="listCardProgress"
        value={getProgress(list.id)}
        sx={{
          height: 8, // Adjust height if needed
          borderRadius: 10,
          backgroundColor: "#9AA0A6", // Background color of the progress bar
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#0D6943", // Color of the progress indicator
          },
        }}
      />
      <div>
        <Button
          className="listCardDeleteList"
          onClick={(e) => {
            e.stopPropagation();
            setIsModalListDeleteOpen(true);
          }}
          buttonText={t(`buttons.deleteList`)}
        />
      </div>

      <ListDeleteModal
        closeModal={closeModalListDelete}
        isModalOpen={isModalListDeleteOpen}
        values={list}
      />
    </Card>
  );
}

export default ListCard;
