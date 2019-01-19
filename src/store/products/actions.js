import Axios from "axios";

const baseUrl = "http://localhost:3500";
// const baseUrl = "/api";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;

export const getPage = async function(context, getPageCount = 1) {
  let url = `${productsUrl}?_page=${context.state.currentPage}` + `&_limit=${context.state.pageSize * getPageCount}`;
  if (context.state.currentCategory != "All") {
    url += `&category=${context.state.currentCategory}`;
  }
  if (context.state.searchTerm != "") {
    url += `&q=${context.state.searchTerm}`;
  }
  let response = await Axios.get(url);
  context.commit('setPageCount', response.headers['x-total-count'])
  context.commit('addPage', {
    number: context.state.currentPage,
    data: response.data,
    pageCount: getPageCount
  })
}

export const getData = async function(context) {
  await context.dispatch("getPage", 5);
  context.commit('setCategories', (await Axios.get(categoriesUrl)).data)
}

export const setCurrentPage = (context, page) => {
  context.commit('_setCurrentPage', page);
  if (!context.state.pages[page]) {
    context.dispatch("getPage");
  }
}

export const setPageSize = (context, size) => {
  context.commit('clearPages');
  context.commit('_setPageSize', size);
  context.dispatch("getPage", 2);
}

export const setCurrentCategory = (context, category) => {
  context.commit('clearPages');
  context.commit('_setCurrentCategory', category);
  context.dispatch("getPage", 2);
}

export const search = (context, term) => {
  context.commit('setSearchTerm', term);
  context.commit('clearPages');
  context.dispatch("getPage", 2);
}

export const clearSearchTerm = (context) => {
  context.commit('setSearchTerm', '');
  context.commit('clearPages');
  context.dispatch("getPage", 2);
}

export const removeProduct = async function(context, product) {
  await context.rootGetters['auth/authenticatedAxios'].delete(`${productsUrl}/${product.id}`);
  context.commit("clearPages");
  context.dispatch("getPage");
}

export const addProduct = async function(context, product) {
  console.log('addProduct', product)
  let data = (await context.rootGetters['auth/authenticatedAxios'].post(productsUrl, product)).data;
  console.log('data', data)
  product.id = data.id;
  context.commit("_addProduct", product);
}

export const updateProduct = async function(context, product) {
   await context.rootGetters['auth/authenticatedAxios'].put(`${productsUrl}/${product.id}`, product);
   context.commit("_updateProduct", product);
}


