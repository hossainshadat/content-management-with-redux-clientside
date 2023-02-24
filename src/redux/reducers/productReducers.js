import { LOAD_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
  product: [],
};

const productReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
  }
};

export default productReducers;
