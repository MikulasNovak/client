import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detail from "./Page/Detail";
import List from "./Page/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="list/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
