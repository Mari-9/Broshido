import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

function Header() {
  return (
  
      <header className="App-header">
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

      </header>
 
  );
}

export default Header;