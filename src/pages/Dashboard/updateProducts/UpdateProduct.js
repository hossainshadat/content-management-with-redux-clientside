import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProductData } from "./../../../redux/thunk/updateProductData";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useSelector((state) => state.product.products);
  const singleProduct = data.find((product) => product._id === id);
  // console.log(data, singleProduct.id);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);

  const statusChange = () => {
    setStatus(!status);
  };

  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  const submit = (data) => {
    const product = {
      model: data.model,
      image: data.image,
      brand: data.brand,
      rating: data.rating,
      price: data.price,
      keyFeature: [
        data.keyFeature1,
        data.keyFeature2,
        data.keyFeature3,
        data.keyFeature4,
      ],
      spec: [],
      status: status,
    };
    navigate("/admin");
    dispatch(updateProductData(id, product));
  };
  return (
    <div className="container">
      <h1 className="display-4 fw-semibold text-center my-4">
        Update PRODUCTS
      </h1>
      <form onSubmit={handleSubmit(submit)} class="row g-3">
        <div class="col-md-6">
          <label for="modelName" class="form-label">
            Model Name
          </label>

          <input
            {...register("model")}
            type="text"
            class="form-control"
            id="modelName"
            defaultValue={singleProduct.model}
          />
        </div>

        <div class="col-md-6">
          <label for="image" class="form-label">
            Image
          </label>

          <input
            {...register("image")}
            type="url"
            class="form-control"
            id="image"
            defaultValue={singleProduct.image}
          />
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Brand
          </label>

          <select
            {...register("brand")}
            class="form-select"
            aria-label="Default select example"
            defaultValue={singleProduct.brand}
          >
            <option selected>Brand</option>
            <option value="intel">Intel</option>
            <option value="amd">AMD</option>
          </select>
        </div>

        <div class="col-md-4">
          <label for="rating" class="form-label">
            Rating ????????????????????
          </label>

          <input
            {...register("rating", { min: 1, max: 5 })}
            type="number"
            class="form-control"
            id="rating"
            defaultValue={singleProduct.rating}
          />
        </div>

        <div class="col-md-4">
          <label for="price" class="form-label">
            Price
          </label>

          <input
            {...register("price")}
            type="number"
            class="form-control"
            id="price"
            defaultValue={singleProduct.price}
          />
        </div>

        <div class="col-md-6">
          <label for="keyFeature1" class="form-label">
            Key Feature 1
          </label>

          <input
            {...register("keyFeature1")}
            type="text"
            class="form-control"
            id="keyFeature1"
            defaultValue={singleProduct.keyFeature[0]}
          />
        </div>

        <div class="col-md-6">
          <label for="keyFeature2" class="form-label">
            Key Feature 2
          </label>

          <input
            {...register("keyFeature2")}
            type="text"
            class="form-control"
            id="keyFeature2"
            defaultValue={singleProduct.keyFeature[1]}
          />
        </div>
        <div class="col-md-6">
          <label for="keyFeature3" class="form-label">
            Key Feature 3
          </label>

          <input
            {...register("keyFeature3")}
            type="text"
            class="form-control"
            id="keyFeature3"
            defaultValue={singleProduct.keyFeature[2]}
          />
        </div>

        <div class="col-md-6">
          <label for="keyFeature4" class="form-label">
            Key Feature 4
          </label>

          <input
            {...register("keyFeature4")}
            type="text"
            class="form-control"
            id="keyFeature4"
            defaultValue={singleProduct.keyFeature[3]}
          />
        </div>
        <div class="col-3">
          <div class="form-check">
            <input
              onChange={() => statusChange(setStatus(!status))}
              class="form-check-input"
              type="checkbox"
              id="status"
              defaultValue={singleProduct.status}
            />

            <label class="form-check-label" for="status">
              Status
            </label>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
