import ItemCard from "./ItemCard";
import RadioFilter from "../../components/filter/RadioFilter";
import "../../assets/styles/item.css";
import { useContext, useState } from "react";
import { ItemContext } from "../../providers/ItemProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function ItemList() {
  const { itemData, setFilterOption } = useContext(ItemContext);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { t, i18n } = useTranslation();

  function handleFilterChange(event) {
    setFilterOption(event.target.value); // This triggers handleLoad in the provider
  }
  const radioButtons = [
    { label: t(`filters.all`), value: "all" },
    { label: t(`filters.resolved`), value: "resolved" },
    { label: t(`filters.unresolved`), value: "unresolved" },
  ];

  return (
    <div className="itemList">
      <div>
        <h2>{t(`containers.itemList`)}</h2>
        <RadioFilter
          className="listItemFilter"
          buttons={radioButtons}
          handleFilterChange={handleFilterChange}
          defaultCheckedValue={selectedFilter}
        />
      </div>
      <div>
        {itemData.length > 0 ? (
          itemData.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p className="noDataText">No items available.</p>
        )}
      </div>
    </div>
  );
}

export default ItemList;
