import "./../App.css";
import ItemList from "../Component/Item/ItemList";
import UserList from "../Component/User/UserList";
import DetailToolbar from "../Component/Toolbar/DetailToolbar";
import UserSelect from "../Component/User/UserSelect";
import { ListContext } from "../Provider/ListProvider";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { setListId } = useContext(ListContext);
  const { id } = useParams();

  useEffect(() => {
    setListId(Number(id));
  });

  return (
    <div>
      <header>
        <section>
          <div>LOGO</div>
          <UserSelect />
        </section>
      </header>
      <main>
        <section>
          <DetailToolbar />
        </section>
        <section>
          <UserList />
        </section>
        <section>
          <ItemList />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Detail;
