import "./Styles/FooterStyles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
          </a>
        </div>

        <div className="Icon">
          <a href="https://twitter.com/home">
            <FontAwesomeIcon icon={["fab", "twitter-square"]} size="2x" />
          </a>
        </div>

        <div className="Icon">
          <a href="https://www.youtube.com/">
            <FontAwesomeIcon icon={["fab", "youtube-square"]} size="2x" />
          </a>
        </div>

        <div className="Icon">
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={["fab", "instagram-square"]} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
