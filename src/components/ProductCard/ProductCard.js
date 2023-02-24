import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";

function ProductCard(product) {
  const { model, image, keyFeature } = product.product;
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>
            <div className="flex-grow-1">
              <ul className="my-1">
                {keyFeature.map((feature) => {
                  return (
                    <li key={feature} className=" ">
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row className="g-2">
            <button type="button " className="btn btn-success">
              Add to Cart
            </button>
            <button type="button" className="btn btn-sm btn-outline-warning">
              Wishlist
            </button>
          </Row>
        </Card.Footer>
      </Card>
    </CardGroup>
    // <CardGroup>
    //   <Col>
    //     <Card>
    //       <Card.Img variant="top" src={image} />
    //       <Card.Body>
    //         <Card.Title>{model}</Card.Title>
    //         <Card.Text>
    //           <div className="flex-grow-1">
    //             <ul className="my-1">
    //               {keyFeature.map((feature) => {
    //                 return (
    //                   <li key={feature} className=" ">
    //                     {feature}
    //                   </li>
    //                 );
    //               })}
    //             </ul>
    //           </div>
    //         </Card.Text>
    //       </Card.Body>
    //       <Card.Footer>
    //         <Row xs={1} lg={2} className="g-2 m-2">
    //           <button
    //             type="button"
    //             className=" btn  btn-sm btn-outline-success btn-block"
    //           >
    //             Add to Cart
    //           </button>
    //           <button type="button" className="btn btn-sm btn-outline-warning">
    //             Wishlist
    //           </button>
    //         </Row>
    //       </Card.Footer>
    //     </Card>
    //   </Col>
    // </CardGroup>
  );
}

export default ProductCard;
