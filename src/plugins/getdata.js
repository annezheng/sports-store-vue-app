// import something here

// leave the export, even if you don't use it
// export default ({ app, router, Vue, store }) => {
//   // something to do
//   console.log('plugin getdata')
//   store.dispatch('products/getData')
// }

const myfunc = async function ({ app, router, Vue, store }) {
  // something to do
  console.log('plugin getdata')
  await store.dispatch('products/getData')
}

export default myfunc