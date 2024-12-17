import React, { useState, useCallback, useContext } from "react";
import "../../assets/styles/toolbar.css";
import { ListContext } from "../../providers/ListProvider";
import ListCreateModal from "../list/CreateModal";
import Button from "../../components/button/Button";
import RadioFilter from "../../components/filter/RadioFilter";

function ListToolbar() {
  const { setFilterOption } = useContext(ListContext);
  const [selectedFilter, setSelectedFilter] = useState("all");

  function handleFilterChange(event) {
    setFilterOption(event.target.value); // This triggers handleLoad in the provider
  }

  const [isModalListCreateOpen, setIsModalListCreateOpen] = useState(false);
  const closeModalListCreate = useCallback(
    () => setIsModalListCreateOpen(false),
    [setIsModalListCreateOpen]
  );

  const radioButtons = [
    { label: "All", value: "all" },
    { label: "Archived", value: "archived" },
    { label: "Unarchived", value: "unarchived" },
  ];

  return (
    <div className="homeToolbar">
      <div>
        <h2>Home</h2>
        <Button
          className="homeToolbarAddList"
          onClick={() => setIsModalListCreateOpen(true)}
          buttonText={"Add list"}
        />
      </div>
      <RadioFilter
        className="homeToolbarFilter"
        buttons={radioButtons}
        handleFilterChange={handleFilterChange}
        defaultCheckedValue={selectedFilter}
      />

      <ListCreateModal
        closeModal={closeModalListCreate}
        isModalOpen={isModalListCreateOpen}
      />
    </div>
  );
}

export default ListToolbar;
