import "./Styles/FooterStyles.css";
import { NavLink, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import useGlobal from "./Store";

function LoginModal(props) {
  const [loggedIn, setLogin] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [globalState, globalActions] = useGlobal();

  const verifyLogin = () => {
    if (username === "OnlyTheWorthy" && password === "shallpass") {
      globalActions.toggleLoginModal(false);
      setLogin(true);
    }
  };
  if (loggedIn) {
    return <Redirect push to="/Admin" />;
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign in</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Username:
        <input type="text" onChange={e => setUsername(e.target.value)} />
        Password:
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => verifyLogin()}>Login</button>
      </Modal.Footer>
    </Modal>
  );
}

function Footer() {
  const [globalState, globalActions] = useGlobal();
  return (
    <div className="footer_wrapper">
      <LoginModal
        show={globalState.loginModal}
        onHide={() => globalActions.toggleLoginModal(false)}
      />

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

        <div className="nav-link">
          <a onClick={() => globalActions.toggleLoginModal(true)}>Login</a>
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
