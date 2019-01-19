export const itemCount = state => {
  return state.lines.reduce((total, line) => total + line.quantity, 0)
}
export const totalPrice = state => {
  return state.lines.reduce((total, line) => total + (line.quantity * line.product.price), 0)
}
