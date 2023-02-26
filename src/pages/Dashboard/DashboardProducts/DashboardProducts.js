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
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
          {/* <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
};

export default DashboardProducts;
