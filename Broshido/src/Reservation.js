import { NavLink } from "react-router-dom";
import "./Styles/ReservationStyles.css";

function Reservation() {
  return (
    <div className="reserve_wrapper">
      <div className="reserve_text">
        <NavLink className={"button primary"} exact to={"/Profiles"}>
          <h1>CHECK OUT OUR SAMURAI!</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Reservation;
