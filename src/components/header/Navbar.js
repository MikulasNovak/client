import UserSelect from "../../containers/user/UserSelect";
import "../../assets/styles/global.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/shopie-logo.png";
import ThemeToggle from "../toggles/ThemeToggle";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

function Navbar() {
  const navigate = useNavigate();
  const { i18n } = useTranslation(); // Get i18n instance

  // Function to handle language change
  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Change language based on selection
  };

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div onClick={() => navigate("/")} className="navbarLogoContainer">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ThemeToggle />
          <select onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="cs">Čeština</option>
          </select>
          <UserSelect />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
