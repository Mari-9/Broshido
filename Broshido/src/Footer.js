import "./Styles/FooterStyles.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="links-wrapper">
        <div className="nav-link">
          <NavLink className={"button primary"} exact to={"/"}>
            Home
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink className={"button primary"} exact to={"/About"}>
            About
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink className={"button primary"} exact to={"/Profiles"}>
            Profiles
          </NavLink>
        </div>

        <div className="nav-link">
          <NavLink className={"button primary"} exact to={"/Contact-us"}>
            Contact us
          </NavLink>
        </div>
      </div>

      <div className="social_wrapper">
        <div className="Icon">
          <a href="https://www.facebook.com/">Facebook</a>
        </div>

        <div className="Icon">
          <a href="https://twitter.com/home">Twitter</a>
        </div>

        <div className="Icon">
          <a href="https://www.youtube.com/">Youtube</a>
        </div>

        <div className="Icon">
          <a href="https://www.instagram.com/">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
