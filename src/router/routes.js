const routes = [
  {
    path: '/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: '', name: "store", component: () => import('pages/Store.vue') },
      { path: '/cart', name: "cart", component: () => import('pages/ShoppingCart.vue') },
      { path: "/checkout", name: "checkout", component: () => import('pages/Checkout.vue') },
      { path: "/thanks/:id", name: "thanks", component: () => import('pages/OrderThanks.vue')},
      { path: "/login", name: "login", component: () => import(/* webpackChunkName: "admin" */ 'pages/admin/Authentication.vue')},
      { path: "/logout", name: "logout", component: () => import(/* webpackChunkName: "admin" */ 'pages/admin/Logout.vue')},
      {
        path: "/admin",
        redirect: {name: 'products'},
        component: () => import(/* webpackChunkName: "admin" */ 'pages/admin/Admin.vue'),
        children: [
          { path: "products/:op(create|edit)/:id(\\d+)?", name: "modifyProduct", component: () => import(/* webpackChunkName: "admin" */ 'pages/admin/ProductEditor.vue'), meta: { private: true } },
          { path: "products", name: "products", component: () => import(/* webpackChunkName: "admin" */ 'pages/admin/ProductsAdmin.vue'), meta: { title: 'Products', private: true } },
          { path: "orders", name: "orders", component: () => import(/* webpackChunkName: "admin" */ 'pages/admin/OrderAdmin.vue'), meta: { title: 'Orders', private: true } },
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
