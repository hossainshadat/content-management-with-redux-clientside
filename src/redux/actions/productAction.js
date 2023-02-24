import { LOAD_PRODUCT } from "../actionTypes/actionTypes";

export const loadProduct = (product) => {
  return {
    type: LOAD_PRODUCT,
    payload: product,
  };
};
