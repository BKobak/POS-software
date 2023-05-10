import { createStore } from "redux";

const initialState = {
  basket: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "CLEAR_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
