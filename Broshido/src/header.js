import { NavLink } from "react-router-dom";
import logo from "./Images/Broshido.png";
import "./Styles/HeaderStyles.css";
function Header() {
  return (
    // <!-- main pg header -->
    <div className="header_wrapper">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="HeaderNavLinks">
        <div className="NavLink">
          <NavLink className={"button primary"} exact to={"/"}>
            Home
          </NavLink>
        </div>
        <div className="NavLink">
          <NavLink className={"button primary"} exact to={"/About"}>
            About
          </NavLink>
        </div>
        <div className="NavLink">
          <NavLink className={"button primary"} exact to={"/Profiles"}>
            Profiles
          </NavLink>
        </div>
        <div className="NavLink">
          <NavLink className={"button primary"} exact to={"/Contact-us"}>
            Contact us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
