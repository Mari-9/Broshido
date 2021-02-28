import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import useGlobal from "./Store";
function Admin() {
  const [globalState, globalActions] = useGlobal();
  useEffect(() => globalActions.toggleLoginModal(false), []);
  return (
    <>
      {globalState.orders.map(order => {
        return (
          <div>
            <span>Order Id</span>
            <span>{order.orderId}</span>
            <span>Status</span>
            <span>{order.status}</span>
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
