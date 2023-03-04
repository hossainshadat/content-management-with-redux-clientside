import {
  LOAD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";
import { ADD_PRODUCT } from "./../actionTypes/actionTypes";

const initialState = {
  products: [],
};

const productReducers = (state = initialState, action) => {
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

    case UPDATE_PRODUCT:
      const updateProduct = { ...action.payload };
      return {
        // ...state,
        products: [...state.products].map((product) => {
          if (product._id === updateProduct._id) {
            return updateProduct;
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};

export default productReducers;
