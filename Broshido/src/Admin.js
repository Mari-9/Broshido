import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "./Styles/AdminStyles.css";
import useGlobal from "./Store";
function Admin() {
  const [globalState, globalActions] = useGlobal();
  return (
    <>
      {globalState.orders.map(order => {
        return (
          <div className="admin_wrapper">
            <div>
              <h4>Order Id:</h4>#{order.orderId}
            </div>
            <div>
              <h4>Status: </h4>
              {order.status}
            </div>
            <button onClick={() => globalActions.cancelOrder(order.orderId)}>
              Cancel Order
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Admin;
