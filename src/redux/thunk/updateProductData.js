import { toast } from "react-hot-toast";
import { updateProduct } from "../actions/productAction";

export const updateProductData = (id, product) => {
  console.log(product);
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(updateProduct(product));
    }
    console.log(data);
  };
};
