import React from "react";

const AddProducts = () => {
  return (
    <div className="container">
      <h1 className="display-4 fw-semibold text-center my-4">ADD PRODUCTS</h1>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="modelName" class="form-label">
            Model Name
          </label>

          <input type="text" class="form-control" id="modelName" />
        </div>

        <div class="col-md-6">
          <label for="image" class="form-label">
            Image
          </label>

          <input type="file" class="form-control" id="image" />
        </div>

        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Brand
          </label>

          <select class="form-select" aria-label="Default select example">
            <option selected>Brand</option>
            <option value="1">Intel</option>
            <option value="2">AMD</option>
          </select>
        </div>

        <div class="col-md-4">
          <label for="rating" class="form-label">
            Rating 🌟🌟🌟🌟🌟
          </label>

          <input type="number" class="form-control" id="rating" />
        </div>

        <div class="col-md-4">
          <label for="amount" class="form-label">
            Amount
          </label>

          <input type="number" class="form-control" id="amount" />
        </div>

        <div class="col-md-6">
          <label for="keyDeature1" class="form-label">
            Key Feature 1
          </label>

          <input type="text" class="form-control" id="keyDeature1" />
        </div>

        <div class="col-md-6">
          <label for="keyDeature2" class="form-label">
            Key Feature 2
          </label>

          <input type="text" class="form-control" id="keyDeature3" />
        </div>
        <div class="col-md-6">
          <label for="keyDeature3" class="form-label">
            Key Feature 3
          </label>

          <input type="text" class="form-control" id="keyDeature3" />
        </div>

        <div class="col-md-6">
          <label for="keyDeature4" class="form-label">
            Key Feature 4
          </label>

          <input type="text" class="form-control" id="keyDeature4" />
        </div>
        <div class="col-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="status" />

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

export default AddProducts;
