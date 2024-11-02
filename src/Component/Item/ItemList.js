import ItemCard from "./ItemCard";
import { useContext } from "react";
import { ItemContext } from "../../Provider/ItemProvider";

function ItemList() {
  const { data, handlerMap } = useContext(ItemContext);

  return (
    <div className="itemList">
      <div>
        <h2>Items</h2>
        <div>FILTER BUTTON</div>
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
