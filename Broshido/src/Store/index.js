import React from "react";
import globalHook from "use-global-hook";
import * as actions from "../Actions";
import { fetchOrders } from "../DataSource";
const initialState = {
  id: 0,
  image: null,
  name: null,
  price: 0,
  type: null,
  booked: [[new Date(), new Date()]],
  reservationDates: [new Date(), new Date()],
  orderInfo: { firstName: "", lastName: "", email: "", creditCard: "" },
  orderId: null,
  status: null,
  orders: fetchOrders(),
  loginModal: false,
  samurai: []
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
