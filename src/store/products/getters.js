export const processedProducts = (state) => {
  return state.pages[state.currentPage];
}

export const pageCount = (state) => {
  return state.serverPageCount
}

export const categories = (state) => {
  return ["All", ...state.categoriesData]
}

export const pageSize = (state) => {
  return state.pageSize
}

export const productById = (state) => (id) => {
  return state.pages[state.currentPage].find(p => p.id == id);
}

/*
export const productsFilteredByCategory = (state, getters) => {
  let currentCategory = state.currentCategory
  return state.products
    .filter(p => currentCategory === "All" || p.category === currentCategory)
}

export const processedProducts = (state, getters) => {
  let index = (state.currentPage -1) * state.pageSize;
  return getters.productsFilteredByCategory
      .slice(index, index + state.pageSize);
}
export const pageCount = (state, getters) => {
  return Math.ceil(getters.productsFilteredByCategory.length / state.pageSize)
}

export const categories = (state, getters) => {
  // return ["All", ...new Set(state.products.map(p => p.category).sort())]
  return ["All", ...state.categoriesData]
}
*/


// export function processedProducts (state) {
//   let index = (state.currentPage -1) * state.pageSize;
//   return state.products.slice(index, index + state.pageSize);
// }
// export function pageCount (state) {
//   return Math.ceil(state.productsTotal / state.pageSize)
// }


