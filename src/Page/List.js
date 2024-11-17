import ListList from "./../Component/List/ListList";
import ListProvider from "./../Provider/ListProvider";
import UserProvider from "./../Provider/UserProvider";
import UserSelect from "./../Component/User/UserSelect";
import ListToolbar from "../Component/Toolbar/ListToolbar";

function List() {
  return (
    <div>
      <header>
        <section>
          <div>LOGO</div>
          <UserSelect />
        </section>
      </header>
      <main>
        <ListToolbar />
        <ListList />
      </main>
    </div>
  );
}
export default List;
