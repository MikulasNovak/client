import Navbar from "../components/header/Navbar";
import "../App.css";
//import "../assets/styles/layout.css";

function Layout({ children }) {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main>
        <section className="layoutContent">{children}</section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Layout;
