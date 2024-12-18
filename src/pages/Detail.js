import "./../App.css";
import ItemList from "../containers/item/ItemList";
import UserList from "../containers/user/UserList";
import DetailToolbar from "../containers/toolbars/DetailToolbar";
import { ListContext } from "../providers/ListProvider";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Chart from "../containers/chart/Chart";
function Detail() {
  const { setListId } = useContext(ListContext);
  const { id } = useParams();

  useEffect(() => {
    setListId(Number(id));
  });
  /*document.getElementById("changeColorButton").addEventListener("click", () => {
  // Select all elements you want to change
  const userList = document.querySelector("userList");
  const userCard = document.querySelector("userCard");
  const itemList = document.querySelector("itemList");
  const itemCard = document.querySelector("itemCard");


  // Loop through and change their background color
  elements.forEach((element) => {
    element.style.backgroundColor = "lightblue"; // New background color
  });
});
*/
  return (
    <div>
      <section>
        <DetailToolbar />
      </section>
      <section>
        <UserList />
      </section>
      <section>
        <ItemList />
      </section>
      <section>
        <Chart />
      </section>
    </div>
  );
}

export default Detail;
