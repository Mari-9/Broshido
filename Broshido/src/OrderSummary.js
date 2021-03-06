import { NavLink } from "react-router-dom";
import React from "react";
import useGlobal from "./Store";
import "./Styles/OrderSummaryStyles.css";
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
        <div className="order_canceled">
          <h1>Order successfully canceled</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="order_summary_wrapper">
        <div className="order_summary_header">
          <h1>Thank you for your order!</h1>
          <p>
            You will recive an email confirmation shortly and one of our
            representatives will be in touch for further details.
          </p>
        </div>
        <div className="order_summary_personal_info">
          <div>
            <h2>Order Number: #{globalState.orderId}</h2>
          </div>

          <div>
            {globalState.orderInfo.firstName} {globalState.orderInfo.lastName}
          </div>
          <div> {globalState.orderInfo.email}</div>
          <div>Status: {globalState.status}</div>
          <div>Creditcard: {globalState.orderInfo.creditCard}</div>
        </div>
        <button onClick={() => handleCancelOrder()}>Cancel Order</button>
      </div>
    </>
  );
}

export default OrderSummary;
