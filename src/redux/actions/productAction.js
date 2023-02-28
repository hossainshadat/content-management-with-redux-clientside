import { LOAD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes/actionTypes";

export const loadProduct = (product) => {
  return {
    type: LOAD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};
