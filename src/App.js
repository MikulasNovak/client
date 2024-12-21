import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "./pages/Detail";
import List from "./pages/Home";
import UserProvider from "./providers/UserProvider";
import ListProvider from "./providers/ListProvider";
import ItemProvider from "./providers/ItemProvider";
import Layout from "./layout/Layout";
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "./i18n"; // Import your i18n configuration

// Set the language to Czech
i18n.changeLanguage("cs");

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
