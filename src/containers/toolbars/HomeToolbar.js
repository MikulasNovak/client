import React, { useState, useCallback, useContext } from "react";
import "../../assets/styles/toolbar.css";
import { ListContext } from "../../providers/ListProvider";
import ListCreateModal from "../list/CreateModal";
import Button from "../../components/button/Button";

function ListToolbar() {
  const { setFilterOption } = useContext(ListContext);

  function handleFilterChange(event) {
    setFilterOption(event.target.value); // This triggers handleLoad in the provider
  }

  const [isModalListCreateOpen, setIsModalListCreateOpen] = useState(false);
  const closeModalListCreate = useCallback(
    () => setIsModalListCreateOpen(false),
    [setIsModalListCreateOpen]
  );

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
      <div className="homeToolbarFilter">
        <label>
          <input
            type="radio"
            name="filterList"
            value="all"
            defaultChecked
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filterList"
            value="archived"
            onChange={handleFilterChange}
          />
          Archived
        </label>
        <label>
          <input
            type="radio"
            name="filterList"
            value="unarchived"
            onChange={handleFilterChange}
          />
          Unarchived
        </label>
      </div>

      <ListCreateModal
        closeModal={closeModalListCreate}
        isModalOpen={isModalListCreateOpen}
      />
    </div>
  );
}

export default ListToolbar;
