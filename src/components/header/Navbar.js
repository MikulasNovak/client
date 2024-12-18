import UserSelect from "../../containers/user/UserSelect";
import "../../assets/styles/global.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/shopie-logo.png";
import ThemeToggle from "../toggles/ThemeToggle";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div onClick={() => navigate("/")} className="navbarLogoContainer">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ThemeToggle />
          <UserSelect />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
