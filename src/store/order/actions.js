import Axios from "axios";

const ORDERS_URL = "http://localhost:3500/orders";
// const ORDERS_URL = "/api/orders";

export const storeOrder = async function(context, order) {
  order.cartLines = context.rootState.cart.lines;
  order.shipped = false;
  return (await Axios.post(ORDERS_URL, order)).data.id;
}

export const getOrders = async function(context) {
  context.commit("setOrders",
    (await context.rootGetters['auth/authenticatedAxios'].get(ORDERS_URL)).data);
}

export const updateOrder = async function(context, order) {
  context.commit("changeOrderShipped", order);
  await context.rootGetters['auth/authenticatedAxios'].put(`${ORDERS_URL}/${order.id}`, order);
}


