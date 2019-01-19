export const loadCartData = (context) => {
  let data = localStorage.getItem("cart");
  if (data != null) {
      context.commit("setCartData", JSON.parse(data));
  }
}

export const storeCartData = (context) => {
  localStorage.setItem("cart", JSON.stringify(context.state.lines));
}

export const clearCartData = (context) => {
  context.commit("setCartData", []);
}

export const initializeCart = (context, store) => {
  context.dispatch("loadCartData");
  store.watch(state => state.cart.lines,
      () => context.dispatch("storeCartData"), { deep: true});
}

