import "./App.css";
import ItemList from "./Component//Item/ItemList";
import UserList from "./Component/User/UserList";
import ListToolbar from "./Component/Toolbar/DetailToolbar";

import ItemProvider from "./Provider/ItemProvider";
import UserProvider from "./Provider/UserProvider";
import ListProvider from "./Provider/ListProvider";

function App() {
  return (
    <div className="App">
      <header>
        <section>
          <div>LOGO</div>
          <div>USER</div>
        </section>
      </header>
      <main>
        <ListProvider>
          <UserProvider>
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
          </UserProvider>
        </ListProvider>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
