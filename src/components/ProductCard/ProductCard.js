import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductCard(product) {
  const { _id, model, image } = product.product;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{model}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Row xs={1} md={2} className="g-2 mb-2">
            <button type="button" class="btn btn-outline-success">
              Success
            </button>
            <button type="button" class="btn btn-outline-success">
              Success
            </button>
          </Row>
        </Card>
      </Col>
    </div>
  );
}

export default ProductCard;
