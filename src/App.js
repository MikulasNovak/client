import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "./Page/Detail";
import List from "./Page/List";
import UserProvider from "./Provider/UserProvider";
import ListProvider from "./Provider/ListProvider";
import ItemProvider from "./Provider/ItemProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ListProvider>
            <ItemProvider>
              <Routes>
                <Route path="/" element={<List />} />
                <Route path="/list/:id" element={<Detail />} />
              </Routes>
            </ItemProvider>
          </ListProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
