import { createStore } from "redux";

const initialState = {
  basket: [],
};

// Reducer function to add items to the basket
function reducer(state = initialState, action) {
  switch (action.type) {
    /* If the action type is ADD_TO_BASKET, return the current state and add the payload to the basket */
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    /* If the action type is REMOVE_FROM_BASKET, return the current state and remove the payload from the basket */
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.name !== action.payload),
      };
    /* If the action type is CLEAR_BASKET, return the current state and clear the basket */
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
