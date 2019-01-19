export const addProduct = (state, product) => {
  let line  = state.lines.find(line => line.product.id == product.id);
  if (line != null) {
      line.quantity++;
  } else {
      state.lines.push({ product: product, quantity: 1 });
  }
}

export const changeQuantity = (state, update) => {
  update.line.quantity = update.quantity;
}

export const removeProduct = (state, lineToRemove) => {
  let index  = state.lines.findIndex(line => line == lineToRemove);
  if (index > -1) {
      state.lines.splice(index, 1);
  }
}

export const setCartData = (state, data) => {
  state.lines = data;
}
