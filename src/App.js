import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "./pages/Detail";
import List from "./pages/Home";
import UserProvider from "./providers/UserProvider";
import ListProvider from "./providers/ListProvider";
import ItemProvider from "./providers/ItemProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ListProvider>
            <ItemProvider>
              <Layout>
                <Routes>
                  <Route path="/" element={<List />} />
                  <Route path="/list/:id" element={<Detail />} />
                </Routes>
              </Layout>
            </ItemProvider>
          </ListProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
