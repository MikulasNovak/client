import ItemCard from "./ItemCard";
import "../../assets/styles/item.css";
import { useContext } from "react";
import { ItemContext } from "../../providers/ItemProvider";

function ItemList() {
  const { itemData, setFilterOption } = useContext(ItemContext);
  function handleFilterChange(event) {
    setFilterOption(event.target.value); // This triggers handleLoad in the provider
  }

  return (
    <div className="itemList">
      <div>
        <h2>Items</h2>
        <div>
          <label>
            <input
              type="radio"
              name="filterItem"
              value="all"
              defaultChecked
              onChange={handleFilterChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="filterItem"
              value="resolved"
              onChange={handleFilterChange}
            />
            Resolved
          </label>
          <label>
            <input
              type="radio"
              name="filterItem"
              value="unresolved"
              onChange={handleFilterChange}
            />
            Unresolved
          </label>
        </div>
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
