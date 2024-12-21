import React, { useState, useCallback, useContext } from "react";
import "../../assets/styles/toolbar.css";
import { ListContext } from "../../providers/ListProvider";
import ListCreateModal from "../list/CreateModal";
import Button from "../../components/button/Button";
import RadioFilter from "../../components/filter/RadioFilter";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function ListToolbar() {
  const { setFilterOption } = useContext(ListContext);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { t } = useTranslation();

  function handleFilterChange(event) {
    setFilterOption(event.target.value); // This triggers handleLoad in the provider
  }

  const [isModalListCreateOpen, setIsModalListCreateOpen] = useState(false);
  const closeModalListCreate = useCallback(
    () => setIsModalListCreateOpen(false),
    [setIsModalListCreateOpen]
  );

  const radioButtons = [
    { label: t(`filters.all`), value: "all" },
    { label: t(`filters.archived`), value: "archived" },
    { label: t(`filters.unarchived`), value: "unarchived" },
  ];

  return (
    <div className="homeToolbar">
      <div>
        <h2>{t(`titles.homepage`)}</h2>
        <Button
          className="homeToolbarAddList"
          onClick={() => setIsModalListCreateOpen(true)}
          buttonText={t(`buttons.addList`)}
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
