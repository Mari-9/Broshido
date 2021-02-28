import React from "react";
import globalHook from "use-global-hook";
import * as actions from "../Actions";

const initialState = {
  id: 0,
  image: null,
  name: null,
  price: 0,
  type: null,
  booked: null,
  reservationDates: null
};

const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
