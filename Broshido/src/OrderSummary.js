import { NavLink } from "react-router-dom";
import React from "react";
import useGlobal from "./Store";
function OrderSummary() {
  const [globalState, globalActions] = useGlobal();
  const [isCanceled, setCanceled] = React.useState(false);
  const handleCancelOrder = () => {
    setCanceled(true);
    globalActions.cancelOrder(globalState.orderId);
  };
  if (isCanceled) {
    return (
      <>
        <div>Order successfully canceled!</div>
      </>
    );
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {globalState.orderId}
      {globalState.status}
      {globalState.creditCard}
      <button onClick={() => handleCancelOrder()}>Cancel Order</button>
    </>
  );
}

export default OrderSummary;
