import React, { useEffect, useState } from "react";
import ProductCard from "./../../../components/ProductCard/ProductCard";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import fetchingProductData from "../../../redux/thunk/fetchingProductData";
import Spinner from "../../../components/spinner/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchingProductData());
  }, []);

  let content;

  if (products.length === 0) {
    return (content = <Spinner />);
  }

  // if (products.length){
  //   return content = <Spinner />
  // }

  // console.log(products);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.data));
  // }, []);
  // console.log(products);

  return (
    <div className="container">
      <div className=" text-center py-3">
        <div className="pt-5 pb-3 lc-block">
          <div className="lc-block mb-4">
            <div editable="rich">
              <h1 className="fw-bold display-4">Redux store</h1>
            </div>
          </div>
          <div className="lc-block mb-5">
            <div editable="rich">
              <p className="lead">
                Using a series of utilities, you can create this jumbotron.
                <br />
                just like the one in previous versions of Bootstrap.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="display-6 fw-bold text-center mb-5 pb-4">Products</div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Row>
    </div>
  );
};

export default Home;
