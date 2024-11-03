import ItemCard from "./ItemCard";
import { useContext } from "react";
import { ItemContext } from "../../Provider/ItemProvider";

function ItemList() {
  const { data, setFilterOption } = useContext(ItemContext);
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
        {data.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
