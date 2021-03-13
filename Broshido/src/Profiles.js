import { NavLink } from "react-router-dom";
import "./Styles/FooterStyles.css";
import "./Styles/ProfilesStyles.css";
import React, { useState, useEffect } from "react";
import { fetchSamuraiProfiles } from "./DataSource";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Styles/CalendarStyles.css";
import { isBefore, isWithinInterval } from "date-fns";
import useGlobal from "./Store";
import groupBy from "lodash.groupby";

const month = new Date().getMonth();
function randomDay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomBookedDate() {
  return [
    [
      new Date(2021, month, randomDay(2, 9)),
      new Date(2021, month, randomDay(11, 17))
    ]
  ];
}

function checkBookedDates({ date, view }, bookedDates) {
  if (view === "month") return isWithinRanges(date, bookedDates);
}

function isWithinRange(date, range) {
  return isWithinInterval(date, { start: range[0], end: range[1] });
}

function isWithinRanges(date, ranges) {
  return ranges.some(range => isWithinRange(date, range));
}

function ProfileModal(props) {
  const [showStartWarning, isStartPastDate] = React.useState(false);
  const [showEndWarning, isEndPastDate] = React.useState(false);
  const [selectedDate, onDateChange] = React.useState([new Date(), new Date()]);
  const [globalState, globalActions] = useGlobal();
  const checkPastDate = ([startDate, endDate]) => {
    onDateChange([startDate, endDate]);
    isStartPastDate(isBefore(new Date(startDate), new Date()));
    isEndPastDate(isBefore(new Date(endDate), new Date()));
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.info.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal_body_wrapper">
          <div className="lightbox_top">
            <img src={props.info.image} alt="Samurai" />
            <div>
              <Calendar
                onChange={checkPastDate}
                value={selectedDate}
                selectRange="true"
                tileDisabled={({ date, view }) =>
                  checkBookedDates({ date, view }, props.info.booked)
                }
              />
            </div>
          </div>

          <div className="lightbox_flex">
            <div className="important_info">
              <div className="samurai_classifications">
                <h4>Type:{props.info.type}</h4>
                <h4>Price:{props.info.price}</h4>
              </div>
              <div className="reservation_specifications">
                <h4>
                  Start Date:
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    value={selectedDate[0].toLocaleDateString()}
                    onChange={e => checkPastDate(e)}
                  />
                </h4>
                <div className={showStartWarning ? "date_warning" : "hidden"}>
                  *Please select a future date.
                </div>
                <h4>
                  End Date:
                  <input
                    type="text"
                    placeholder="MM/DD/YYYY"
                    value={selectedDate[1].toLocaleDateString()}
                    onChange={e => checkPastDate(e)}
                  />
                </h4>
                <div className={showEndWarning ? "date_warning" : "hidden"}>
                  *Please select a future date.
                </div>
                <div>*Greyed out dates are already reserved</div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <NavLink
          className={"button primary"}
          exact
          to={"/CheckOut"}
          onClick={() =>
            globalActions.setCurrentSamurai({
              ...props.info,
              reservationDates: selectedDate
            })
          }
        >
          Reserve Now
        </NavLink>
      </Modal.Footer>
    </Modal>
  );
}

function RenderSamurai() {
  const [modalInfo, setModalShow] = useState({
    visible: false,
    info: { name: null, image: null, type: null, price: null, booked: null }
  });
  const [data, setData] = useState({ types: [], samurai: [] });
  useEffect(() => {
    fetch("https://broshido.fawa.space/samurai.php")
      .then(response => response.json())
      .then(json => {
        const samuraiSet = new Set();
        json.forEach(item => samuraiSet.add(item.type));
        setData({ types: [...samuraiSet], samurai: json });
      });
  }, []);

  return (
    <>
      <ProfileModal
        show={modalInfo.visible}
        info={modalInfo.info}
        onHide={() => setModalShow({ ...modalInfo, visible: false })}
      />

      {data.types.map(item => (
        <div className="Section1">
          <div className="section_header">
            <h1>{item}</h1>
          </div>
          <div className="samurai_type">
            {data.samurai.map(samurai => {
              return samurai.type == item ? (
                <div
                  className="samurai"
                  onClick={() =>
                    setModalShow({
                      visible: true,
                      info: { ...samurai, booked: getRandomBookedDate() }
                    })
                  }
                >
                  <img src={samurai.image} alt="Samurai" />
                  <h2>{samurai.name}</h2>
                </div>
              ) : null;
            })}
          </div>
        </div>
      ))}
    </>
  );
}

// class Profiles extends Component {
function Profiles() {
  // render() {
  return (
    <>
      <div className="samurai_profiles_wrapper">
        <RenderSamurai />
      </div>
    </>
  );
  // }
}

export default Profiles;
