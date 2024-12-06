import UserSelect from "../../containers/user/UserSelect";
import "../../assets/styles/global.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div>LOGO</div>
        <UserSelect />
      </div>
    </div>
  );
}

export default Navbar;
