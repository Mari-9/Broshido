import React from "react";
import useGlobal from "./Store";
function CheckOut() {
  const [globalState, globalActions] = useGlobal();

  return <>{globalState.price}</>;
}

export default CheckOut;
