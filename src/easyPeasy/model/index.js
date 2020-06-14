import { action, thunk } from "easy-peasy";

const model = {
  // Store
  products: [],

  // Fetch data from API
  fetchProduct: thunk(async actions => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const result = await res.json();
    actions.setProducts(result);
  }),

  // Actions
  setProducts: action((state, payload) => {
    const result = payload.map(item => {
      return {
        ...item,
        quanty: 0
      }
    });
    state.products = result;
  }),

  addQuanty: action((state, payload) => {
    state.products.map(item => {
      if(item.id === payload.id) {
        item.quanty = payload.quanty + 1
      }
      return item
    });
  }),

  lessQuanty: action((state, payload) => {
    state.products.map(item => {
      if(item.id === payload.id && item.quanty > 0) {
        item.quanty = payload.quanty - 1
      }
      return item
    });
  }),
};

export default model;