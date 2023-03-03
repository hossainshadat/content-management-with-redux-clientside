import { LOAD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes/actionTypes";
import { ADD_PRODUCT } from "./../actionTypes/actionTypes";

const initialState = {
  products: [],
};

const productReducers = (state = initialState, action) => {
  // console.log(action.payload, state);
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product._id !== action.payload),
        ],
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

export default productReducers;
