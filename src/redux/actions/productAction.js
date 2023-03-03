import { LOAD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes/actionTypes";
import { ADD_PRODUCT } from "./../actionTypes/actionTypes";

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

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
