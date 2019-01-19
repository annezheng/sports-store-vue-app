// import something here

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  // something to do
  Vue.filter("currency", (value) =>  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value));
}
