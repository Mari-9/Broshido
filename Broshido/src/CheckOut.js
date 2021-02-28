import { NavLink } from "react-router-dom";
import React from "react";
import useGlobal from "./Store";
function CheckOut() {
  const [globalState, globalActions] = useGlobal();
  const [creditCard, setCreditCard] = React.useState("");
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* {globalState.id} */}
      <img src={globalState.image} />
      {globalState.name}
      {globalState.price}
      {globalState.type}
      {/* {globalState.booked} */}
      {globalState.reservationDates[0].toLocaleDateString()}
      {globalState.reservationDates[1].toLocaleDateString()}
      Credit Card
      <input type="text" onChange={e => setCreditCard(e.target.value)} />
      <NavLink
        className={"button primary"}
        exact
        to={"/OrderSummary"}
        onClick={() => globalActions.setOrderInformation(creditCard)}
      >
        Confirm Reservation
      </NavLink>
    </>
  );
}

export default CheckOut;
