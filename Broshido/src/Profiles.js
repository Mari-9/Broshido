import "./Styles/FooterStyles.css";
import "./Styles/ProfilesStyles.css";
import React, { Component } from "react";
import { fetchSamuraiProfiles } from "./DataSource";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Calendar />
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const renderSamurai = () => {
  let children = [];
  children = fetchSamuraiProfiles().map(item => (
    <div className="Section1">
      <div>
        <h1>{item.title}</h1>
      </div>
      <div className="samurai_type">
        {item.children.map(samurai => (
          <div className="samurai">
            <img src={samurai.image} alt="Samurai" />
            <h2>{samurai.name}</h2>
          </div>
        ))}
      </div>
    </div>
  ));
  return children;
};

// class Profiles extends Component {
function Profiles() {
  const [modalShow, setModalShow] = React.useState(false);
  // render() {
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="samurai_profiles_wrapper">{renderSamurai()}</div>;
    </>
  );
  // }
}

export default Profiles;
