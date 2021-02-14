import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import logo from "./Broshido.png";
function Header() {
  return (
    // <!-- main pg header -->
    <div className="header_wrapper">
      <div className="logo">
        <img src={logo} alt="LOGO" style={{width:"200px"}}/>
        <NavLink className={"button primary"} exact to={"/"}>
          Home
        </NavLink>

        <NavLink className={"button primary"} exact to={"/About"}>
          About
        </NavLink>

        <NavLink className={"button primary"} exact to={"/Profiles"}>
          Profiles
        </NavLink>

        <NavLink className={"button primary"} exact to={"/Contact-us"}>
          Contact us
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
