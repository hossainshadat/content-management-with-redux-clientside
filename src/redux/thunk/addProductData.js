import { addProduct } from "./../actions/productAction";
import { toast } from "react-hot-toast";

export const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const data = await res.json();

    console.log(data);
    if (data.acknowledged) {
      toast.success(data.message);
      dispatch(
        addProduct({
          _id: data.insertedId,
          ...product,
        })
      );
    }
  };
};
