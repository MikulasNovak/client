import ItemCard from "./ItemCard";
import RadioFilter from "../../components/filter/RadioFilter";
import "../../assets/styles/item.css";
import { useContext, useState } from "react";
import { ItemContext } from "../../providers/ItemProvider";

function ItemList() {
  const { itemData, setFilterOption } = useContext(ItemContext);
  const [selectedFilter, setSelectedFilter] = useState("all");

  function handleFilterChange(event) {
    setFilterOption(event.target.value); // This triggers handleLoad in the provider
  }
  const radioButtons = [
    { label: "All", value: "all" },
    { label: "Resolved", value: "resolved" },
    { label: "Unresolved", value: "Unresolved" },
  ];

  return (
    <div className="itemList">
      <div>
        <h2>Items</h2>
        <RadioFilter
          className="listItemFilter"
          buttons={radioButtons}
          handleFilterChange={handleFilterChange}
          defaultCheckedValue={selectedFilter}
        />
      </div>
      <div>
        {itemData.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
