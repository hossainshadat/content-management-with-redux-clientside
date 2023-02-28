import { toast } from "react-hot-toast";
import { removeProduct } from "../actions/productAction";

export const removeProductData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/son",
      },
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(removeProduct(id));
    }
    console.log(data);
  };
};
