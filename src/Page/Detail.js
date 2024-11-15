import "./../App.css";
import ItemList from "../Component/Item/ItemList";
import UserList from "../Component/User/UserList";
import ListToolbar from "../Component/Toolbar/DetailToolbar";
import UserSelect from "../Component/User/UserSelect";

import ItemProvider from "../Provider/ItemProvider";
import UserProvider from "../Provider/UserProvider";
import ListProvider from "../Provider/ListProvider";

function Detail() {
  return (
    <div>
      <UserProvider>
        <header>
          <section>
            <div>LOGO</div>
            <UserSelect />
          </section>
        </header>
        <main>
          <ListProvider>
            <ItemProvider>
              <section>
                <ListToolbar />
              </section>
              <section>
                <UserList />
              </section>
              <section>
                <ItemList />
              </section>
            </ItemProvider>
          </ListProvider>
        </main>
        <footer></footer>
      </UserProvider>
    </div>
  );
}

export default Detail;
