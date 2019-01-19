import Vue from 'vue'

export const setOrders = (state, data) => {
  console.log('setorder', data)
  state.orders = data;
}

export const changeOrderShipped = (state, order) => {
  Vue.set(order, "shipped",
      order.shipped ? false : true);
}



