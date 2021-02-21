import { NavLink } from "react-router-dom";
import "./Styles/ReservationStyles.css";

function Reservation() {
  return (
    <div className="reserve_wrapper">
      <div className="reserve_text">
        <h1>MAKE A RESERVATION TODAY!</h1>
      </div>
      <div className="button">
        <button>
          <NavLink className={"button primary"} exact to={"/Profiles"}>
            Profiles
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Reservation;
