export const setCurrentSamurai = (store, info) => {
  store.setState({ ...info });
};

export const setOrderInformation = (store, orderInfo) => {
  // const firstName = store.state.firstName;
  // const lastName = store.state.lastName;
  // const email = store.state.email;

  const id = Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000;
  const orders = store.state.orders;
  const status = "pending";
  orders.push({ orderId: id, status: status });
  store.setState({ orderInfo, orderId: id, status: status, orders: orders });
};

// firstName.firstName
// lastName.lastName
// email.email

export const cancelOrder = (store, orderId) => {
  let orders = store.state.orders;
  orders = orders.filter(order => order.orderId != orderId);
  store.setState({ orders: orders, loginModal: false });
};

export const toggleLoginModal = (store, visible) => {
  store.setState({ loginModal: visible });
};
