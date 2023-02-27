import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import fetchingProductData from "./../../../redux/thunk/fetchingProductData";
import ProductsList from "./ProductsList";

const DashboardProducts = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  // console.log(products);
  useEffect(() => {
    dispatch(fetchingProductData());
  }, []);

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Model Name</th>
            <th>Brand Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductsList key={product._id} product={product} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardProducts;
