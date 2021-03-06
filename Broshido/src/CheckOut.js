import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import useGlobal from "./Store";
import "./Styles/CheckOutStyles.css";
function CheckOut() {
  const [globalState, globalActions] = useGlobal();
  const [creditCard, setCreditCard] = useState("");
  const [orderInfo, setOrderInfo] = useState({
    fistName: "",
    lastName: "",
    email: "",
    creditCard: ""
  });
  return (
    <>
      <div className="checkout_wrapper">
        <div className="top_wrapper">
          <img src={globalState.image} />
          <div className="confirmation_samurai_info">
            <div>{globalState.name}</div>
            <div>{globalState.price}</div>
            <div>{globalState.type}</div>
            <div className="confirmation_dates">
              <div>
                Start date:
                <div className="dates_of_reservation">
                  {globalState.reservationDates[0].toLocaleDateString()}
                </div>
              </div>
              <div>
                End date:
                <div className="dates_of_reservation">
                  {globalState.reservationDates[1].toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="confirmation_information">
          <div className="credit_card_input">
            <div className="cc_name_info">
              <div>
                <h4>First Name</h4>
                <input
                  type="text"
                  onChange={e =>
                    setOrderInfo({ ...orderInfo, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <h4>Last Name</h4>
                <input
                  type="text"
                  onChange={e =>
                    setOrderInfo({ ...orderInfo, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <h4>Email</h4>
              <input
                type="text"
                onChange={e =>
                  setOrderInfo({ ...orderInfo, email: e.target.value })
                }
              />
            </div>

            <div className="cc_information">
              <h4>Credit Card</h4>
              <input
                type="text"
                onChange={e =>
                  setOrderInfo({ ...orderInfo, creditCard: e.target.value })
                }
              />
              <div className="cc_security_info">
                <div>
                  <h4>Experation Date</h4>
                  <input type="text" />
                </div>
                <div>
                  <h4>CCV</h4>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          <NavLink
            className={"button primary"}
            exact
            to={"/OrderSummary"}
            onClick={() => globalActions.setOrderInformation(orderInfo)}
          >
            Confirm Reservation
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
