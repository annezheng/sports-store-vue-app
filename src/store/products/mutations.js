import Vue from 'vue'

export const _setCurrentPage = (state, page) => {
  state.currentPage = page;
}
export const _setPageSize = (state, size) => {
  state.pageSize = size;
  state.currentPage = 1;
}
export const _setCurrentCategory = (state, category) => {
  state.currentCategory = category;
  state.currentPage = 1;
}
export const addPage = (state, page) => {
  console.log('addPage -before', state.pages, typeof(state.pages))
  for (let i = 0; i < page.pageCount; i++) {
    Vue.set(state.pages, page.number + i, page.data.slice(i * state.pageSize, (i * state.pageSize) + state.pageSize));
  }
  console.log('addPage -after', state.pages, state.pages[1])
}
export const clearPages = (state) => {
  state.pages.splice(0, state.pages.length)
  // state.pages = [] //???
}
export const setCategories = (state, categories) => {
  state.categoriesData = categories
}
export const setPageCount = (state, count) => {
  state.serverPageCount = Math.ceil(Number(count) / state.pageSize);
}
export const setShowSearch = (state, show) => {
  state.showSearch = show;
}
export const setSearchTerm = (state, term) => {
  state.searchTerm = term;
  state.currentPage = 1;
}
export const _addProduct = (state, product) => {
  state.pages[state.currentPage].unshift(product);
}
export const _updateProduct = (state, product) => {
  let page = state.pages[state.currentPage];
  let index = page.findIndex(p => p.id === product.id);
  Vue.set(page, index, product);
}

/*
export const setCurrentPage = (state, page) => {
  state.currentPage = page;
}
export const setPageSize = (state, size) => {
  state.pageSize = size;
  state.currentPage = 1;
}

export const setCurrentCategory = (state, category) => {
  state.currentCategory = category;
  state.currentPage = 1;
}

export const setData = (state, data) => {
  state.products = data.pdata;
  state.productsTotal = data.pdata.length;
  state.categoriesData = data.cdata.sort();
}
*/
