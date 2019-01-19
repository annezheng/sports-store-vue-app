import Vue from 'vue'
import Vuex from 'vuex'

import products from './products'
import cart from './cart'
import order from './order'
import auth from './auth'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      products,
      cart,
      order,
      auth
    }
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./products'], () => {
      const newProducts = require('./products').default
      store.hotUpdate({ modules: { products: newProducts } })
    })
  }
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./cart'], () => {
      const newCart = require('./cart').default
      store.hotUpdate({ modules: { cart: newCart } })
    })
  }
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./order'], () => {
      const newOrder = require('./order').default
      store.hotUpdate({ modules: { order: newOrder } })
    })
  }
  if (process.env.DEV && module.hot) {
    module.hot.accept(['./auth'], () => {
      const newAuth = require('./auth').default
      store.hotUpdate({ modules: { auth: newAuth } })
    })
  }

  return Store
}
